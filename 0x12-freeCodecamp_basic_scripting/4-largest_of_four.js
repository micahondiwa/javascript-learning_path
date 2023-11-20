/*
Returns an array consisting of the largest
number from each provided sub-array.
*/

function largestOfFour(arr) {
  const largests = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumbers = arr[i][0];
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] > largestNumbers) {
        largestNumbers = arr[i][j];
      }
    }
    largests[i] = largestNumbers;
  }
  return largests;
}
