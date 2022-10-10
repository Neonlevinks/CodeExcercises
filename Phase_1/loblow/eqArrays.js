const assertEqual = require('./assertEqual');

//Write a function that checks if 2 arrays are equal
const eqArrays = (array1, array2) => {
  let array1Contents = "";
  let array2Contents = "";
  for (let item of array1) {
    array1 += item.toString();
  };
  for (let item of array2) {
    array2 += item.toString();
  }
  return array1Contents === array2Contents ? true : false;
}

//TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["a", 2, 3], ["a", 2, 3]), true);