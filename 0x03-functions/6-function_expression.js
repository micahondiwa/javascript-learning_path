/*
- defines a function inside an expression.
*/
const platNeedsWater = "";
const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
plantNeedsWater("Tuesday");
console.log(plantNeedsWater("Tuesday"));
