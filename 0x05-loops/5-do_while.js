/*
 * A do...while loop: adds at least one cup of sugar to the batter even if the value of cupsOfSugarNeeded is 0
 */
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;
do {
  cupsAdded = cupsAdded + 1;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);
