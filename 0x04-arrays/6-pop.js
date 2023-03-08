/*
- removing elements from an array using the pop() method.
*/
const chores = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];
chores.pop(chores[chores.length - 1], [chores.length - 2]);
console.log(chores);
