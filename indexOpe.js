const person = {
  name: "Lucas",
  surname: "Marciano",
  age: 25,
  postalCode: "12493-440",
  //   mother: {
  //     // name: "Adriana",
  //     // surname: "Silva",
  //     // age: 40,
  //     // postalCode: "93873-439",
  //   },
};

// In order to avoid create a IF clause if itens in an object exists I can use: Optional chaining
console.log("Optional chaining: ", person?.mother?.name);
// ---------------------------------------------------------------------
const numberOfParticipants = 20; //null, 0, 20
const participants = numberOfParticipants ?? "None";
console.log("Nullish coalescing: ", participants);
// ---------------------------------------------------------------------
function sum(name, ...parcels) {
  return `Student ${name}: ${parcels.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )}`;
}
// prettier-ignore
console.log("Rest->",sum("Lucas", 2, 5),"|",sum("Caio", 2, 3),"|",sum("Thaina", 2, 3, 4));
// ---------------------------------------------------------------------
const objectA = {
  id: 0,
  name: "João",
  lastName: "Lira",
};
const listA = [1, 4, 7];
const listB = listA;
listB[1] = 3;
console.log("Because of the reference type:", listB, listA);

const listC = [...listA];
listC[1] = 10;
console.log("Because of the Spread(...) operator:", listC, listA);

const objectB = { ...objectA, preferedColor: "blue" };
console.log("Because of the Spread(...) operator:", objectA, objectB);
// ---------------------------------------------------------------------
const person1 = {
  name: "Caio",
  lastName: "Marciano",
  age: 24,
  netWorth: 1_000_000,
  car: {
    brand: "Fiat",
    model: "Mobi",
    year: "2020",
  },
};

const { name, lastName, age } = person1;
const { brand, model, year } = person1.car;
console.log("Destruction: ");
console.log(
  `${name} ${lastName} has ${age} years old and drives a ${brand} ${model} from ${year}`
);
