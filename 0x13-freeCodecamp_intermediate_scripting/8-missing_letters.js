/*
Finds the missing letter in the passed letter
range and return.
Return undefined if all letters are present.
*/

function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str.split("").foreEach((letter) => {
    if (letter.charCodeAt(0) === currCharCode) {
      currCharCode++;
    } else {
      missing = String.fromCharCode(currCharCode);
    }
  });
  return missing;
}

// Test
fearNotLetter("abce");
