const sumTwoNumbers = require("./sum");

test("should return the sum of two numbers", () => {
  expect(sumTwoNumbers(1, 2)).toBe(3);
});

test("should return null if either input is not a number", () => {
  expect(sumTwoNumbers(1, "2")).toBeNull();
  expect(sumTwoNumbers("1", 2)).toBeNull();
  expect(sumTwoNumbers(null, 2)).toBeNull();
});
