// Make a function that returns the tail of an array

const assertEqual = require('./assertEqual');


const tail = (array) => {
  const result = array.slice(1);
  const originalArrayContents = ""
  for (let item of array) {
    originalArrayContents += item.toString();
  };
  const tailContents = "";
  for (let item of result) {
    tailContents += item.toString();
  }

  return `Orignal array is ${originalArrayContents}; Tail of the array is ${tailContents}`
}

//TEST CODE
