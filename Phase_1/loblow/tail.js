// Make a function that returns the tail of an array

const assertEqual = require('./assertEqual');

const tail = (array) => {
  const result = array.slice(1);
  console.log(array);
  console.log(result);
}

//TEST CODE
tail([3,5,7,8]);