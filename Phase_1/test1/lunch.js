/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, give a message.
 * If there are less than 10 dollars in the account, message to eat at home.
 * If there are more than 10 dollars, suggest eating at Glamorgan Diner.
 * If there are more than 20 dollars, suggest eating at Kitty's Chinese Restaurant.
 * 
 * hungry is a Boolean, representing if you're hungry or not.
 * balance is a Number, representing the lunch money in my pocket in dollars
 */

function whatToDoForLunch(hungry, balance) {
  if (hungry && balance) { // if hungry is true, and balance is a non-negative number
    if (balance < 10) { //and I have less than 10 dollars
      return console.log("Stay home and eat crumbs.");
    } else if (balance >= 10 && balance < 20) {
      return console.log("You can try the Daily Surprise at Glamorgan");
    } else if (balance >= 20){
      return console.log("Try Maggie's House Special Chicken");
    } else {
      return console.log("You're in a bootcamp, reconsider how much time you have to spare...")
    }
  };

  return console.log("Not hungry? Then let's keep doing our best!");
}


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */
console.log("I'm hungry and I have 5 dollars in my pocket.");
whatToDoForLunch(true, 5);
console.log("---");

console.log("I'm hungry and I have 12 dollars in my pocket");
whatToDoForLunch(true, 12);
console.log("---");

console.log("I'm hungry and I have 23 dollars in my pocket.");
whatToDoForLunch(true, 23);
console.log("---");

console.log("I'm hungry and I have 45 dollars in my pocket.");
whatToDoForLunch(true, 45);