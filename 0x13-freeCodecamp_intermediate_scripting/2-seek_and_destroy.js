/*
Given and initial array as the first argument, followed
by one or more arguments, the function removes all elements
from the initial array that are of the same value as these 
arguments.

A variadic function - accepts indeterminate number of arguments.
*/

function destroyer(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeEelements = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeEelements = true;
      }
    }
    if (!removeEelements) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}
