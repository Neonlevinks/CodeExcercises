//make a function that checks if the actual value matches the expected value;

const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
}

//TEST CODE
assertEqual("Kevin", "Kevin") //should pass
assertEqual("Lighthouse Labs", "Bootcamp") //should fail
assertEqual(1, 1) //should pass
assertEqual(1,3) //should fail