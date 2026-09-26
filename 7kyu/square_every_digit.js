function squareDigits(num) {
  const numArray = num.toString().split("");
  for (let i = 0; i < numArray.length; i++) {
    numArray[i] *= numArray[i];
  }
  return parseInt(numArray.join(""));
}
