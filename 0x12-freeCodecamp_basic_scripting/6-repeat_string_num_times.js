/*
Repeat a given string num times,
Returns an empty string if num is not
a positive number. 
*/

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  }
  return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3);
