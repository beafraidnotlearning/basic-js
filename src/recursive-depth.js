const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
      let buff = 1;
      if (Array.isArray(arr[i])) {
        buff += this.calculateDepth(arr[i]);
        if (result < buff) {
          result = buff;
        }
      }
    }
    return result;
  }
};
