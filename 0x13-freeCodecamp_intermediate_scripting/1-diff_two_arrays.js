/* 
Compare two arrays and return a new array with any items
only found in one of the two given arrays, but not both.
*/

function diffArray(arr1, arr2) {
  return [...diff[(arr1, arr2)], ...diff(arr1, arr2)];

  function diff(a, b) {
    return a.filter((item) => b.indexOf(item) === -1);
  }
}

// Option 2

function diffArray(arr1, arr2) {
  const newArr = [];

  function onlyFirst(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }

  onlyFirst(arr1, arr2);
  onlyFirst(arr2, arr1);

  return newArr;
}
