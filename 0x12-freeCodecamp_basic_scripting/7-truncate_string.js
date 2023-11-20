/*
Truncates a string(str) if it is longer than 
the given maximum string length (num).
Returns the truncated string with `...` ending.
*/

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
}
