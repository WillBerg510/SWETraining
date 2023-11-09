// Promises
const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Resolved the promise!");
  }
  else {
    reject("Rejected the promise!");
  }
})

console.log(myPromise);

const nextPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("nextPromise resolved!");
  }, 3000)
})

nextPromise.then(value => {
  console.log(value);
})

myPromise.then(value => {
  console.log(value);
}).catch(err => {
  console.error(err);
})

const users = fetch("https://jsonplaceholder.typicode.com/users");
users.then(response => {
  return response.json();
})
.then(data => {
  data.forEach(user => {
    console.log(user);
  })
})

// Async / Await
const myUsers = {
  userList: []
}

async function bestFunction() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
}

bestFunction();

async function otherFunction() {
  const data = await bestFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
}

otherFunction();

async function getAllUserEmails() {
  const data = await bestFunction();
  const userEmailArray = data.map(user => {
    return user.email;
  });
  postToWebPage(userEmailArray);
}

const postToWebPage = function(data) {
  console.log(data);
}

getAllUserEmails();

const jokeObject = {
  id: "0oO71TSv4Ed",
  joke: "Where did Captain Hook get his hook? From a second hand store."
}

async function postData(jokeObj) {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jokeObj)
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse);
}

postData(jokeObject);

async function requestJoke(firstName, lastName) {
  const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
  const jsonResponse = await response.json();
  console.log(jsonResponse.value.joke);
}

requestJoke("Clint","Eastwood");