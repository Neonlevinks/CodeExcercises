const eqArrays = require('./eqArrays');

//Write a function that takes 2 arrays and print an appropriate message to the console: 

const assertArraysequal = (array1, array2) => {
  const isArrayEqual = eqArrays(array1, array2);
  isArrayEqual === true ? console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
};

