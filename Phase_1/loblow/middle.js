// Write a function that returns the middle of an array
 
const assertArraysequal = require('./assertArraysEqual');

const middle = (array) => {
  const result = [];

  return result;
}

//TEST CODE
assertArraysequal(middle([1]), []); //pass, no middle of 1 item array
assertArraysequal(middle([1, 2]), []); //pass, no middle of 2 item array
assertArraysequal(middle([1, 2, 3]), [2]); //pass, middle is 2
assertArraysequal(middle([1, 2, 3, 4]), [2, 3]) //pass, middle is 2, 3