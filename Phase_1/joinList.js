const joinList = (array) => {
  let finalString = "";
  for (let i = 0; i < array.length; i++) {
    i === array.length - 1 ? finalString += ` and ${array[i]}` : finalString += `${array[i]}, `;
  }
  return finalString;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);