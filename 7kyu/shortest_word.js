function findShort(s) {
  const sWords = s.split(" ");
  let shortestWord = sWords[0];
  for (let i = 0; i < sWords.length; i++) {
    if (sWords[i].length < shortestWord.length) {
      shortestWord = sWords[i];
    }
  }
  return shortestWord.length;
}
