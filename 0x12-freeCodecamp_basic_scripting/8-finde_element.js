/* 
Looks through an array (arr) and returns
the first element in it that passes a 
'truth test'.
*/

function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}
