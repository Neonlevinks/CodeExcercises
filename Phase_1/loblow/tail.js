// Make a function that returns the tail of an array

const assertEqual = require('./assertEqual');


const tail = (array) => {
  const result = array.slice(1);
  let originalArrayContents = ""
  for (let item of array) {
    originalArrayContents += item.toString();
  };
  let tailContents = "";
  for (let item of result) {
    tailContents += item.toString();
  }

  return `Original array is ${originalArrayContents}; Tail of the array is ${tailContents}`
}

//TEST CODE
assertEqual(tail([3,5,7,8]), `Original array is 3578; Tail of the array is 578`);