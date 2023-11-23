/*
Returns the smallest common multipe of the provided
parameters that can be evenly divided by both,
as well as by all sequential numbers in the range
between these parameters.
*/

function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  const upperBound = range.reduce((prod, curr) => prod * curr);

  for (let multiple = max; multiple <= upperBound; multiple += max) {
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}
