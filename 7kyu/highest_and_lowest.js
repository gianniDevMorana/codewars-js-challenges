function highAndLow(numbers) {
  let numbersArray = numbers.split(" ").map((v) => parseInt(v));

  console.log(numbersArray);

  let higherNum = numbersArray[0];
  let lowestNum = numbersArray[0];

  for (let i = 0; i < numbersArray.length; i++) {
    let value = numbersArray[i];

    console.log(value);

    if (higherNum < value) {
      higherNum = value;
    }
    if (lowestNum > value) {
      lowestNum = value;
    }
  }

  return higherNum + " " + lowestNum;
}
