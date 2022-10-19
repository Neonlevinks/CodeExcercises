// Write a function that returns the middle of an array
 
const assertArraysequal = require('./assertArraysEqual');

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

//TEST CODE
assertArraysequal(middle([1]), []); //pass, no middle of 1 item array
assertArraysequal(middle([1, 2]), []); //pass, no middle of 2 item array
assertArraysequal(middle([1, 2, 3]), [2]); //pass, middle is 2
assertArraysequal(middle([1, 2, 3, 4]), [2, 3]) //pass, middle is 2, 3