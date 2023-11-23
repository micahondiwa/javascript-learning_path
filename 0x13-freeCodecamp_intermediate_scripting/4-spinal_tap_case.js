/*
Converts a string to spinal case. Spinal case is 
all-lowercase-words-joned-by-dashes.
*/

function spinalCase(str) {
    let regex = /\S+|_+/gi;

    str = str.replace(/([a-z])([A-Z])gi, "$1 $2");

    return str.replace(regex, "-").toLowerCase();
}
