//Write a function that removes specific items from an array

const without = (startingArray, removalItem) => {
  const resultArray = [];
  for (const word of startingArray) {
    word !== removalItem ? resultArray.push(word) : console.log(`Match found: ${word} removed`)
  }
  return resultArray;
};


module.exports = without;