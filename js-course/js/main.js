// User Input
let nameInput = prompt("Please enter your name.");
if (nameInput.trim() ) {
  console.log(nameInput.trim());
}
else {
  console.log("No name given.");
}
let soup = "chicken noodle soup";
let customerIsBanned = true;
console.log(customerIsBanned ? "Sorry, no soup for you!" : soup ? "Yes, we have soup." : "Sorry, no soup today.");

switch (Math.floor(Math.random() * 5) + 1) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  default:
    console.log("No match");
}

// Rock Paper Scissors
playerOne = "paper";
computer = "paper";
if (playerOne === computer) {
  console.log("Tie!");
}
else if (playerOne === "rock") {
  if (computer === "paper") {
    console.log("CPU wins!");
  }
  else {
    console.log("Player wins!")
  }
}
else if (playerOne === "paper") {
  if (computer === "rock") {
    console.log("Player wins!");
  }
  else {
    console.log("CPU wins!");
  }
}
else {
  if (computer === "rock") {
    console.log("CPU wins!");
  }
  else {
    console.log("Player wins!");
  }
}

let testScore = 59;
let collegeStudent = false;
let grade;
if (testScore >= 90) {
  grade = "A";
}
else if (testScore >= 80) {
  grade = "B";
}
else if (testScore >= 70) {
  grade = "C";
}
else if (testScore >= 60) {
  grade = "D";
}
else {
  if (collegeStudent) {
    grade = "U";
  }
  else {
    grade = "F";
  }
}
console.log(grade);

soup = "chicken noodle soup";
let crackers = true;
customerIsBanned = false;
let reply;
if (customerIsBanned) {
  reply = "No soup for you!";
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} and crackers.`;
} else if (soup) {
  reply = `Here's your order of ${soup}.`;
} else {
  reply = `Sorry, we're out of soup.`;
}
console.log(reply);

// Code Challenge #1
const myName = "Will";
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));