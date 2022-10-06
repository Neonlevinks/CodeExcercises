// Write a function that returns strings from the command line in reverse

const reverse = (string) => {
  console.log(string);
  let result = '';
  for (let i = string.length -1 ; i >= 0; i--) {
    result += string[i];
  }
  console.log(result);
}

//TEST CODE
reverse("hello");