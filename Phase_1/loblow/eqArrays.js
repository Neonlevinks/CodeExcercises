//Write a function that checks if 2 arrays are equal
const eqArrays = (array1, array2) => {
  let array1Contents = "";
  let array2Contents = "";
  if (array1) {
    for (let item of array1) {
      array1Contents += item.toString();
    };
  }
  if (array2) {
    for (let item of array2) {
      array2Contents += item.toString();
    }
  }
  
  return array1Contents === array2Contents ? true : false
}

module.exports = eqArrays;