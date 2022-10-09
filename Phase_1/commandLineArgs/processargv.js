// add 2 numbers inputted from command line and print the total sum

const inputs = process.argv.slice(2);

let result = 0;

for (const input of inputs) {
  
  result += +input; //addubg a + in front of a variable name will change it to a number.
}
console.log(result);