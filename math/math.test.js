const {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
  squareRoot,
  maxNumber,
} = require("./math");

describe("Testing the math modules", () => {
  test("testing to add 2 numbers", () => expect(addNumbers(2, 3)).toBe(5));

  test("testing to subtract 2 numbers from each other", () =>
    expect(subtractNumbers(4, 3)).toBe(1));

  test("testing to multiply 2 numbers", () =>
    expect(multiplyNumbers(2, 3)).toBe(6));

  test("testing numbers divided by each other", () =>
    expect(divideNumbers(6, 2)).toBe(3));

  test("testing the square root of a number", () =>
    expect(squareRoot(25)).toBe(5));

  test("Takes in multiple numbers and return the max", () =>
    expect(maxNumber(2, 3, 10, 43, 23)).toBe(43));
});
