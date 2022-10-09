//Write a program that takes a single number from the command line, and rolls that many six sided dice

const roll = (totalDice) => {
  let allRolls = "";

  for (let currentDice = 1; currentDice <= totalDice; currentDice++) {

    currentDice === totalDice ? allRolls += `${Math.floor(Math.random() * 6 + 1)}` : allRolls += `${Math.floor(Math.random() * 6 + 1)}, `;

  }
  return console.log(`Rolled ${totalDice} dice: ${allRolls}`);
};

const args = process.argv.slice(2);
roll(args);
