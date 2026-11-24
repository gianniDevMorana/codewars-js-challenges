function greetJedi(first, last) {
  const firstPart =
    first.slice(0, 2).charAt(0).toUpperCase() +
    first.slice(0, 2).slice(1).toLowerCase();
  const lastPart =
    last.slice(0, 3).charAt(0).toUpperCase() +
    last.slice(0, 3).slice(1).toLowerCase();

  return `Greetings, master ${lastPart}${firstPart}`;
}

console.log(greetJedi("Beyonce", "Knowles"));
console.log(greetJedi("Chris", "Angelico"));
console.log(greetJedi("grae", "drake"));
