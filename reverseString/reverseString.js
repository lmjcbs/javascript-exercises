const reverseString = function(str) {
  const result = str.split('');
  return result.reverse().join('');
};

module.exports = reverseString;
