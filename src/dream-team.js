const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members) ? members
        .filter((element) => typeof element == "string")
        .map((element) => element.replace(/ /g, "").slice(0, 1).toUpperCase())
        .sort()
        .join("")
    : false;
};
