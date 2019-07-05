const removeFromArray = function(arr, ...arguments) {
  return arr.filter((item) => !arguments.includes(item));
};

module.exports = removeFromArray;
