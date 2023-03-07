/*
- building a Magic Eight Ball using control flow in JavaScript.
*/

//An empty variable username
let userName = "Micah";

//A ternary expression printing hello username or hello if the username is empty
userName !== "" ? console.log(`Hello ${userName}!`) : console.log("Hello!");

//The user question like the Magic Eight Ball.
let userQuestion = "Will I work at Google?";
console.log(`The question asked by ${userName} is : ${userQuestion}`);

//Generating a random number between 0 and 7.
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = "";

if ((randomNumber = 0)) {
  eightBall = "It is certain";
  console.log(eightBall);
} else if ((randomNumber = 1)) {
  eightBall = "It is decidedly so";
  console.log(eightBall);
} else if ((randomNumber = 2)) {
  eightBall = "Reply hazy try again";
  console.log(eightBall);
} else if ((randomNumber = 3)) {
  eightBall = "Cannot predict now";
  console.log(eightBall);
} else if ((randomNumber = 4)) {
  eightBall = "Do not count on it";
  console.log(eightBall);
} else if ((randomNumber = 5)) {
  eightBall = "My sources say no";
  console.log(eightBall);
} else if ((randomNumber = 6)) {
  eightBall = "Outlook not so good";
  console.log(eightBall);
} else {
  console.log("Signs point to yes!");
}
