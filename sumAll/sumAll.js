const sumAll = function(a, b) {
  if ((a < 0 || b < 0) ||
     (!Number.isInteger(a) || !Number.isInteger(b))) {
    return 'ERROR';
  }
  let sum = 0;
  if (a > b) {
    for (let i = b; i < a + 1; i += 1) {
      sum += i;
    }
  } else if (b > a) {
    for (let i = a; i < b + 1; i += 1) {
      sum += i;
    }
  }
  return sum;
};

module.exports = sumAll;
