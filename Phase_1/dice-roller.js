//Write a program that takes a single number from the command line, and rolls that many six sided dice

const roll = (totalDice) => {
  let allRolls = "";
  allRolls = Math.floor(Math.random()*6 + 1);
  console.log(allRolls)

  
  return allRolls;
};

//TEST CODE
roll();