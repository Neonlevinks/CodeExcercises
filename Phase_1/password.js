//Write a script that takes a command line string and prints out the obfuscated version with the following rules
// "a" replaced with "4"
// "e" replaced with "3"
// "o" replaced with "0"
// "l" replaced with "1"

const args = process.argv.slice(2);

const obfuscate = (string) => {
  let result = "";
  for (let letter of string) {
    if (letter === "a") {
      result += "4";
    } else if (letter === "e") {
      result += "3";
    } else if (letter === "o") {
      result += "0";
    } else if (letter === "l") {
      result += "1";
    } else {
      result += letter
    }
  }
  return result;
}

const obfuscateArgs = (inputArray) => {
  for (let input of inputArray) {
    obfuscate(input);
  }
}

obfuscateArgs(args);
