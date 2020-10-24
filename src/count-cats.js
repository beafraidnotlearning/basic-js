const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix
    .toString()
    .split(",")
    .filter((cv) => cv == "^^").length;
};
