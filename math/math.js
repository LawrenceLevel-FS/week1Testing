// * You are to write tests and code for your math module that will add, subtract, multiply, and divide.

const addNumbers = (a, b) => a + b;
const subtractNumbers = (a, b) => a - b;
const multiplyNumbers = (a, b) => a * b;
const divideNumbers = (a, b) => {
  if (a === 0 || b === 0) {
    return "Cannot divide by zero";
  } else {
    return a / b;
  }
};

// * Also, write 2 additional tests using JavaScript's Math Object. The two tests will be square root and max.
const squareRoot = (num) => Math.sqrt(num);
const maxNumber = (...nums) => Math.max(...nums);

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
  squareRoot,
  maxNumber,
};
