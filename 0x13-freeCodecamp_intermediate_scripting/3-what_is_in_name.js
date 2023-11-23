/* 
A function that looks through an array of objects (first arg)
and returns an array of all objects that have matching name and
value pairs (second arg).
*/

function whatIsInAName(collection, source) {
  // What's in a name?
  const collectionMatches = [];

  for (let i = 0; i < collection.length; i++) {
    let foundMismatch = false;

    for (const sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        foundMismatch = true;
      }
    }
    if (!foundMismatch) {
      collectionMatches.push(collection[i]);
    }
  }
  return collectionMatches;
}
