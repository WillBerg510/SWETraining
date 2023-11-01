const myArray = [];
myArray[0] = "Will";
myArray[1] = 1001;
myArray[2] = false;

myArray.push("school");
myArray.pop();
myArray.unshift(50);
myArray.shift();

console.log(myArray[myArray.length - 1]);
console.log(myArray[0]);
console.log(myArray.slice(1));
console.log(myArray.join().split(","));
console.log(myArray.concat(myArray.slice(1)));
console.log([myArray, myArray.join().split(",")]);

var x = 1;
let y = 2;
const z = 3;

function myFunc() {
  var x = 10;
  const z = 5;
  {
    var x = 11;
    const z = 6;
  }
  console.log(x);
  console.log(z);
}

myFunc();

const toProperCase = (nameVar) => {
  return nameVar.charAt(0).toUpperCase() + nameVar.slice(1).toLowerCase();
}

console.log(toProperCase("will"));

const getUserNameFromEmail = (email) => {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("will@email.com"));

function sum(num1 = 0, num2 = num1) {
  return num1 + num2;
}

console.log(sum(2, 8));

let myName = "Will Berg";
let counter = 0;
let myLetter;
while (true) {
  myLetter = myName.charAt(counter);
  console.log(myLetter);
  counter++;
  if (counter === 3) {
    continue;
  }
  if (myLetter === "l") {
    break;
  }
}

for (let i = 0; i < myName.length; i++) {
  console.log(myName.charAt(i));
}

let myNumber = 0;
do {
  console.log(myNumber);
  myNumber += 10;
} while (myNumber < 50);