//Write a function which takes an array with items and nested arrays, and returns one flattened array
const resultArray = [];

const flatten = (array) => {

  for (const item of array) {
    if (Array.isArray(item)){
      flatten(item);
    } else {
      resultArray.push(item)
    };
  }


  return resultArray
}



//TEST CODE
console.log(flatten([1, 2, [3, 4], 5, [6]]));

