/*
Altering words as per the rules:
1.  If a word begins with a consonant, takes the first or
a consonant cluster, moves it to the end of the word and add 
'ay' to it.

2. If a word begins with a volwel, just add 'way' at the end.
*/

function translatePigLatin(str) {
  let consonantsRegex = /^[^aeiou]+/;
  let consonants = str.match(consonantsRegex);
  return consonants !== null
    ? str.replace(consonantsRegex, "").concat(consonants).concat("ay")
    : str.concat("way");
}
