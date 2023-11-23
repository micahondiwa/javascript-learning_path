/*
A function that sums 2 arguments together.
If only 1 arg is provided, return a function that 
expects one argument and return the sum.
*/

function addTogether() {
  const [first, second] = arguments;

  if (typeof first === "number") {
    if (typeof second === "number") return first + second;
    if (arguments.length === 1) return (second) => addTogether(first, second);
  }
}
