# Project: Simple Sum Function with Jest Test

This project demonstrates a simple JavaScript function to sum two numbers and includes unit testing using Jest.

## How to Run the Project

1. Clone the repository or download the files.
2. Open the project folder in a terminal.
3. Run `npm install` to install dependencies.
4. Run `npm test` to execute the unit tests.

## Files

- **sum.js**: Contains the `sumTwoNumbers` function.
- **sum.test.js**: Contains unit tests for the `sumTwoNumbers` function.
- **README.md**: Documentation for the project.

## Function Details

The function `sumTwoNumbers(a, b)`:
- Takes two arguments `a` and `b`.
- Returns the sum if both inputs are numbers.
- Returns `null` if either input is not a number.

## Example Usage

```javascript
const sumTwoNumbers = require('./sum');

console.log(sumTwoNumbers(2, 3)); // Output: 5
console.log(sumTwoNumbers(2, '3')); // Output: null
