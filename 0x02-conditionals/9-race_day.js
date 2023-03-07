/*
- building a schedule for a race day.
*/

let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);

let earlyRegistration = false;
let runnerAge = 16;

if (runnerAge > 18 && earlyRegistration === true) {
  raceNumber += 1;
}

if (runnerAge > 18 && earlyRegistration === true) {
  console.log(
    `Registration time is 9:30 am and the race number is ${raceNumber}.`
  );
} else if (runnerAge > 18 && earlyRegistration === false) {
  console.log(
    `Registration time is 11:00 am and the race number is ${raceNumber}.`
  );
} else if (runnerAge < 18) {
  console.log(
    `Registration time is 12:30 pm and the race number is ${raceNumber}.`
  );
} else {
  console.log(
    `Registration time is 11:00 am and the race number is ${raceNumber}.`
  );
}
