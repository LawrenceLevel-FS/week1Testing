const { timesTwo } = require("./math");

describe("Testing the math modules", () => {
  test("", () => {
    const result1 = timesTwo(2, 2);
    const result2 = timesTwo(1, 2);
    const result3 = timesTwo(2, 6);
    const result4 = timesTwo(2, 12);

    expect(result1).toBe(4);
    expect(result2).toBe(2);
    expect(result3).toBe(12);
    expect(result4).toBe(24);
  });
});
