// //CommonJS
// const allExports = require("./module1");
// const Car1 = allExports["Car"];
// const myTest = allExports["teste"];
// console.log(myTest);

// ES6
// As I am importing a defaut export, I have to put outside {} and I can change the Name
import carClass, { teste } from "./module1.js";
console.log(teste);

function createCars() {
  const car1 = new carClass("Toyota", "Etios", 2022);
  const car2 = new carClass("Fiat", "Mobi", 2022);

  car1.turnOn();
  car2.turnOn();

  car1.getDetails();
  car2.getDetails();

  car1.turnOff();
  car2.turnOff();
}

createCars();
