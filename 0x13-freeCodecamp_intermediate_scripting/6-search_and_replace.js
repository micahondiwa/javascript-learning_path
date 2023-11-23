/*
Performs a search and replace on the sentence
using the arguments provided and returns the new
sentence.
1. First arg is the sentence to perform a search and
replace on.
2. Second arg is the word to replace.
3. Third arg is the word that is replacing the second arg.
*/

function myReplace(str, before, after) {
  let index = str.indexOf(before);

  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  str = str.replace(before, after);

  return str;
}
