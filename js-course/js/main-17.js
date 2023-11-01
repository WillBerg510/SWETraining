const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham"
}
delete band.vocals;
console.log(band.hasOwnProperty("vocals"));
console.log(Object.keys(band));
console.log(Object.values(band));
for (let job in band) {
  console.log("On " + job + ", it's " + band[job] + "!");
}

const vehicle = {
  wheels: 4,
  engine: function() {
    return "Vroom";
  }
}

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.engine());
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {
  return "Whooooooooosh";
}
console.log(car.engine());
const tesla = Object.create(car);
tesla.engine = function() {
  return "Shhhhhhhhhh";
}
console.log(tesla.engine());

const myObj = {name: "Will"};
const otherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced Tea"
  },
  action: function() {
    return "Time for " + this.beverage.morning;
  }
}
console.log(myObj.name);
console.log(otherObj.hobbies[2]);
console.log(otherObj["beverage"]["morning"]);
console.log(otherObj.action());