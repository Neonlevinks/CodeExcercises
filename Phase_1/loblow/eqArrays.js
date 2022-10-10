//Write a function that checks if 2 arrays are equal
const eqArrays = (array1, array2) => {
  let array1Contents = "";
  let array2Contents = "";
  for (let item of array1) {
    console.log(array1Contents)
    array1Contents += item.toString();
  };
  for (let item of array2) {
    array2Contents += item.toString();
    console.log(array2Contents)
  }
  return console.log(array1Contents === array2Contents ? true : false)
}

eqArrays([1,2,3],[3,2,1])

module.exports = eqArrays;