//My age - human age.
let myAge = 29;
//Early years
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
//Late years
lateYears = myAge - 2;
//Number of dog years accounted for by my late years
lateYears = lateYears * 4;
console.log(earlyYears);
console.log(lateYears);
//My years in Dog years
myAgeInDogYears = earlyYears + lateYears;

let myName = "Micah".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
