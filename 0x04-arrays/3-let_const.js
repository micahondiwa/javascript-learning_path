/*
- Array declarations: arrays declared with 'let' can be reassigned, while arrays declared with 'const' cannot be reassigned.
*/

let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];
condiments[0] = "Mayo";
console.log(condiments);
condiments = ["Mayo"];
console.log(condiments);

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];
utensils[3] = "Spoon";
console.log(utensils);
