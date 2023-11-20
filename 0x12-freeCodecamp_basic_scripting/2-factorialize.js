/*
Function returns the factorial
of the given integer.
*/

function factorialize(num) {
  let product = 1;
  for (let i = 0; i <= num - 1; i++) {
    product *= num - i;
  }
  return product;
}
