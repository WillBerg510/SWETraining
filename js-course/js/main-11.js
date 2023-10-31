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