/*
Given a positive integer num, return the sum of all odd Fibonacci
numbers that are less than or equal to num.
*/

function sumFibs(num) {
  let prevNum = 0;
  let currNum = 1;
  let results = 0;

  while (currNum <= num) {
    if (currNum % 2 !== 0) {
      results += currNum;
    }
    currNum += prevNum;
    prevNum = currNum - prevNum;
  }

  return results;
}
