function digitize(n) {
  const digits = n.toString();
  let digitsArray = [];
  for (let i = 0; i < digits.length; i++) {
    digitsArray += digits[i];
  }
  return digitsArray.split("").reverse().map(Number);
}
