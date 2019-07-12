/* eslint-disable require-jsdoc */
const add = (...val) => val.reduce((a, c) => a + c);

const subtract = (a, b) => a - b;

const sum = (val) => val.reduce(((a, c) => a + c), 0);

const multiply = (val) => val.reduce(((a, c) => a * c), 1);

const power = (b, p) => {
  let total = b;
  for (let i = 1; i < p; i += 1) {
    total *= b;
  }
  return total;
};

const factorial = (n) => {
  let total = 1;
  for (let i = 1; i <= n; i += 1) {
    total *= i;
  }
  return total;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
