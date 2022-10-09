//Write a program that takes a single number from the command line, and rolls that many six sided dice

const roll = (totalDice) => {
  let allRolls = "";

  for (let currentDice = 1; currentDice <= totalDice ; currentDice++) {
    allRolls += `${Math.floor(Math.random()*6 + 1)} `;

  }


  console.log(allRolls)

  
  return console.log(`Rolled ${totalDice} dice: ${allRolls}`);
};

//TEST CODE
roll(2);