const joinList = () => {
  let finalString = ""
  for (const concept of conceptList) {
    finalString += `${concept}, `
  }
  return finalString;
}

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);