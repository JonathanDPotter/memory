// This is an example of the Fisher-Yates(aka Knuth) Shuffle https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle I got it from Stack Overflow here: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

import { Cat } from "../App";

const shuffle = (array: Cat[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export default shuffle;
