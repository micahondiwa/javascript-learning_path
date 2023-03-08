/**
 * creating object literal and accessing properties of the object.
 */

let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};
// Write your code below
let crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;
console.log(planetArray);
