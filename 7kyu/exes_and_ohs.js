function XO(str) {
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char === "x") countX++;
    if (char === "o") countO++;
  }
  return countX === countO;
}
