/*
A function to match the missing base pairs for the
provided DNA strand. Finds the base pair character
for each provided string. 
1. Base pairs are AT and CG.
2. Example, given GCG, the function returns 
[["G", "C"], ["C", "G"], ["G", "C"]]
*/

function pairElements(str) {
  const matchWithBasePair = function (char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };
  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    pairs.push(matchWithBasePair(str[i]));
  }
  return pairs;
}
