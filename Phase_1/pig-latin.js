// Write a function that returns strings from the command line in pig latin
// pig latin takes a word and outputs a word that starts with the tail, then the head, then has ay added. 
// for example, pig would become igpay.

const pigLatin = (word) => {
  let result = '';
  result += word.slice(1);
  result += word[0];
  result += 'ay'

  console.log(result);
  return result;
}


// TEST CODE
pigLatin('pig') // should return 'igpay'
