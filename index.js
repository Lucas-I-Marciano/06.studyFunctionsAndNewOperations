const list = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("PUSH - Change the element");
list.push(9);
// The object was changed, mutated
console.log(list);

console.log("\nPOP - Change the element");
const lastElement = list.pop();
console.log(lastElement);
console.log(list);

console.log("\nCONCAT - Don't change the element");
const list2 = [9, 10, 11, 12, 13];
console.log(list.concat(list2));
console.log(list);
console.log("\n------------------------------\n");
console.log("**Map, Filter, Reduce");

// 130_000 = 130000, just a matter of visualization
const income = [
  150_000, 110_000, 90_000, 70_000, 100_000, 120_000, 130_000, 95_000, 120_000,
  130_000, 120_000, 160_000,
];

console.log("Map: Maintain the length");
//prettier-ignore
const incomaMap = income.map((iten) => {return iten * 2});
const incomaMap2 = income.map((iten) => iten * 2);
console.log(incomaMap);

console.log("Filter: Maintain or Reduce the length");
// Predicate is a function that return "true" or "false"
const incomeFilter = income.filter((item) => {
  return item >= 130000;
});
console.log(incomeFilter);

console.log("Reduce: Reduce the length to 1");
let totalIncome = 0;
for (let i = 0; i < income.length; i++) {
  totalIncome += income[i];
}
console.log("Average: ", totalIncome / income.length);

const annualIncome = income.reduce((total, actualItem) => {
  return total + actualItem;
}, 0);
console.log("Average: ", annualIncome / income.length);
