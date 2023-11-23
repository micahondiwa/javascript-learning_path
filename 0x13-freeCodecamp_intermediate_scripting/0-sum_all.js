/* 
Sum all numbers in a range.
Pass an array of 2 numbers, return
the sum of those two numbers plus the sum
of all numbers between them.
*/

function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let totals = 0;

  for (let i = min; i <= max; i++) {
    totals += i;
  }
  return totals;
}
