//Write a program that takes a single number from the command line, and rolls that many six sided dice

const roll = (totalDice) => {
  let allRolls = "";
  let sumRolls = 0;
  const rollD6 = () => Math.floor(Math.random() * 6 + 1);
  for (let currentDice = 1; currentDice <= totalDice; currentDice++) {
    const currentRoll = rollD6();
    console.log(`currentDice = ${currentDice}; totalDice = ${totalDice}`)
    currentDice === totalDice ? allRolls += `${currentRoll}` : allRolls += `${currentRoll}, `;
    sumRolls += currentRoll
  }
  return console.log(`Rolled ${totalDice} dice: ${allRolls}. \nTotal = ${sumRolls}`);
};

const args = Number(process.argv.slice(2));
roll(args);
