const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error();
  }
  const result = [];
  const keywords = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];
  for (let index = 0; index < array.length; index++) {
    switch (array[index]) {
      case keywords[0]:
        if (index < array.length - 1) {
          index++;
        }
        break;
      case keywords[1]:
        if (index > 0 && array[index - 2] != keywords[0]) {
          result.pop();
        }
        break;
      case keywords[2]:
        if (index < array.length - 1) {
          result.push(array[index + 1]);
        }
        break;
      case keywords[3]:
        if (index > 0 && array[index - 2] != keywords[0]) {
          result.push(array[index - 1]);
        }
        break;
      default:
        result.push(array[index]);
    }
  }
  return result;
};
