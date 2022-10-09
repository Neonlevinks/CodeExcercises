// Write a function that returns strings from the command line in reverse

//This function strictly reverses any string and prints it
const reverse = (string) => {
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  console.log(result);
  return result;
};

//This funtion will take in the command line args, and apply the reverse function to each arg in the array
const reverseArgs = (array) => {
  for (let item of array) {
    reverse(item);
  }
};

const args = process.argv.slice(2);
reverseArgs(args);
