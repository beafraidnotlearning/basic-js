const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addition;
  if(options["separator"] == undefined) {
    options["separator"] = "+";
  }
  if(options["additionRepeatTimes"] > 1) {
    addition = new Array(options["additionRepeatTimes"]).fill(String(options["addition"])).join(options["additionSeparator"]);
  } else {
    addition = options["addition"] != undefined ? options["addition"] : "";
  }
  return (options["repeatTimes"] != undefined) ? Array(options["repeatTimes"]).fill(str + addition).join(options["separator"]) : str + addition;
};
  