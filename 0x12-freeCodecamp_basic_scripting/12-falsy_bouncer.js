/*
A function that remove falsy values from an array.
falsy values: false, null, o, "", undefined, and NaN.
*/

function bouncer(arr) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}
