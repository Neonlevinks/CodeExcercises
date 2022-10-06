// write a function that returns the head, (the first item), of an array.

import assertEqual from "./assertEqual"

const head = (array) => {
  result = array[0];
  return result;
}

//TEST CODE
assertEqual(head([5,6,7]), 5); 
assertEqual(head(["Hello", "Mister", "Nelson"]), "Hello");