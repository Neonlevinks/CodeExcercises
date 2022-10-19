// Write a function that returns the middle of an array
 
const middle = (array) => {
  const result = [];

  if (array.length > 2) {
    if (array.length % 2 === 0) {
      const lowerMiddle = array[(array.length/2 - 1)];
      const upperMiddle = array[(array.length/2)];
      result.push(lowerMiddle);
      result.push(upperMiddle);
    }
    if (array.length % 2 !== 0) {
      const middle = array[Math.floor(array.length/2)];
      result.push(middle);
    }
  }

  return result;
}

module.exports = middle;