// With default I make this class or this object of export more important.
// In my import, this object could be outside {}
export default class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.isEngineOn = false;
  }

  turnOn() {
    this.isEngineOn = true;
    console.log("Engine is now running");
  }

  turnOff() {
    this.isEngineOn = false;
    console.log("Engine has been turned off");
  }

  getDetails() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}
export const teste = "This is just a test";
// // CommonJS to share classes
// module.exports = { Car, teste };
