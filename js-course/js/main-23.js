const myArray = ["eat", "sleep", "code", "repeat"];
const myObject = {
  name: "Will",
  hobbies: ["eat", "sleep", "code", "repeat"],
  logName: function() {
    console.log(this.name);
  }
}

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
console.log(localStorage.key(0));
console.log(localStorage.length);
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);