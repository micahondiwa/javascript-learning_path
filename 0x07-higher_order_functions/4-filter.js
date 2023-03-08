/**
 * Implenting filter() function on arrays.
 */

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter((number) => {
  return number < 250;
});

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter((word) => {
  {
    if (word.length > 7) return word;
  }
});
console.log(longFavoriteWords);
