# Study - Functions and New Operations in JavaScript

This project focuses on studying JavaScript functions and new list operations, as well as class methods that interact with the class itself.

## Project Objectives
- Learn and practice common list operations in JavaScript.
- Understand the `Spread` operator and how to use it effectively.
- Create and use functions within classes that interact with the class instance.

## Features
- Examples of list operations: `push`, `pop`, `concat`, `map`, `filter`, and `reduce`.
- Usage of the `Spread` (`...`) operator.
- Functions within classes that manipulate and access class properties.

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/Lucas-I-Marciano/06.studyFunctionsAndNewOperations
   ```
2. Open the project folder:
   ```bash
   cd 06.studyFunctionsAndNewOperations
   ```
3. Open `index.html` in your browser to view examples.

## Concepts Covered
### List Operations
- **push:** Adds an element to the end of the list.
- **pop:** Removes the last element from the list.
- **concat:** Combines two or more lists.
- **map:** Creates a new list by applying a function to each element.
- **filter:** Returns a new list containing elements that match a condition.
- **reduce:** Reduces the list to a single value based on a function.

#### Example
```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```

### Spread Operator
- Use the `...` operator to copy or merge lists.

#### Example
```javascript
const list1 = [1, 2, 3];
const list2 = [4, 5, 6];
const combined = [...list1, ...list2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

### Class Functions
Functions within classes that interact with class properties.

#### Example
```javascript
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
    console.log(`Count is now: ${this.count}`);
  }
}

const counter = new Counter();
counter.increment();
```

## Author
[Lucas I. Marciano](https://github.com/Lucas-I-Marciano)

## License
This project is for educational purposes only and does not include a specific license.

