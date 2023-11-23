/*
Given the array, iterate through and remove each element starting
from the first element (the 0 index) until the function 'func' returns
true when the iterated element is passed through.
*/

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
