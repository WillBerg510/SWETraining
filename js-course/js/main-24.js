import * as Guitars from "./guitars.js";
import User from "./user.js";

console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());
const me = new User("email@email.com","Will");
console.log(me.greeting());