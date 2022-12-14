// Write a function that returns strings from the command line in pig latin
// pig latin takes a word and outputs a word that starts with the tail, then the head, then has ay added.
// for example, pig would become igpay.

const pigLatin = (word) => {
  let result = '';
  result += word.slice(1);
  result += word[0];
  result += 'ay';

  console.log(result);
  return result;
};

const pigLatinArgs = (inputs) => {
  for (const input of inputs) {
    pigLatin(input);
  }
};

const args = process.argv.slice(2);
pigLatinArgs(args);
