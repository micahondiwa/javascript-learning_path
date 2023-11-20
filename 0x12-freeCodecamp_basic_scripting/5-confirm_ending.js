/*
A function that confirms if a string (str)
ends with the given target string (target)
*/

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
