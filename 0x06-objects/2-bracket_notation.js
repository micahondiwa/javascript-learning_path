/**
 * using bracket notation and the propName variable provided, console.log() the value of the 'Active Mission' property.
 */

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";

let isActive = spaceship["Active Mission"];

console.log(spaceship[propName]);
