const palindromes = function(str) {
  const charsRegex = /[a-z]/;
  const strArr = str.toLowerCase().split('');
  const result = strArr.filter((char) => charsRegex.test(char));
  return result.join('') === result.reverse().join('');
};

module.exports = palindromes;
