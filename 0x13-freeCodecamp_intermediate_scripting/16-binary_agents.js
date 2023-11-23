/*
Returns an English translated sentence
of the passed binary string.

The binary string will be space seperated.
*/

function binaryAgent(str) {
  var bistring = str.split(" ");
  var unistring = [];

  for (var i = 0; i < bistring.length; i++) {
    unistring.push(String.fromCharCode(parseInt(bistring[i], 2)));
  }

  return unistring.join("");
}
