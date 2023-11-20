/*
Splits and array (arr) into groups the length of
size (second arg) and returns them as a 
two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  let tempArr = [];
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) {
      tempArr.push(arr[i]);
    } else {
      tempArr.push(arr[i]);
      results.push(tempArr);
      tempArr = [];
    }
  }

  if (tempArr.length !== 0) {
    results.push(tempArr);
    return results;
  }
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
