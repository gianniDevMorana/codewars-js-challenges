function isIsogram(str) {
  let array = [];
  const lowerCasedStr = str.toLowerCase();
  for (let i = 0; i < lowerCasedStr.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] === lowerCasedStr[i]) {
        return false;
      }
    }
    array.push(lowerCasedStr[i]);
  }
  return true;
}
