/*
A function that copies the elements in the first array
into the second array, in order. Begins inserting elements
at index n.
*/

function frankeSplice(arr1, arr2, n) {
  let tempArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    tempArr.splice(n, 0, arr1[i]);
    n++;
  }
  return tempArr;
}

frankeSplice([1, 2, 3], [4, 5, 6], 1);
