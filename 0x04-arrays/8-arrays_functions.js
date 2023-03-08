/*
- functions that implement array methods.
*/
const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}
console.log(concept);
changeArr(concept);
console.log(changeArr(concept));

const removeElement = (newArr) => {
  newArr.pop();
};
removeElement(concept);
console.log(concept);
