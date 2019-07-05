const repeatString = function(str, n) {
  let result = '';
  for (let i = 0; i < n; i += 1) {
    result += str;
  }
  return n < 0 ? 'ERROR' : result;
};

module.exports = repeatString;
