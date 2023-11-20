/*
Returns the lowest index at which a value (num) should
be inserted inot an array (arr) once it has been
sorted.
*/

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}
