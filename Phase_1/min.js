const min = function(numbers) {
  let lowest = numbers[0];
  for (let number of numbers) {
    if (number < lowest) {
      lowest = number;
    }
  }
  return lowest;
}


/*
 * This is some test runner code that's simply calling our min function defined
 * above to verify it's returning the proper minimum. Do not modify it!
 */

module.exports = min