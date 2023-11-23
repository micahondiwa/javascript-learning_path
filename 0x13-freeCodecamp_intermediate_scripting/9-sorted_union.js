/*
Takes 2 or more arrays and returns a new array of unique values 
in order of the original provided array.
All values present from all arrays should be included in their 
original order, but with no duplicates in the final array.
*/

function uniteUnique(arr) {
  const args = [...arguments];
  const results = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!results.includes(args[i][j])) {
        results.push(args[i][j]);
      }
    }
  }
  return results;
}
