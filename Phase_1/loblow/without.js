//Write a function that removes specific items from an array

const assertArraysEqual = require("./assertArraysEqual");

const words = ["hello", "world", "lighthouse"]
const without = (startingArray, removalItem) => {
  const resultArray = [];
  for (const word of startingArray) {
    word !== removalItem ? resultArray.push(word) : console.log(`Match found: ${word} removed`)
  }
};

without(words, "lighthouse");

assertArraysEqual(words, ["hello", "world", "lighthouse"]);