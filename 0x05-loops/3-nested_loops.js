/**
 * Nested loops
 */
const bobsFollowers = ["Follower 1", "Follower 2", "Follower 3", "Follower 3"];
const tinasFollowers = ["Follower 1", "Follower 2", "follower3"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);
