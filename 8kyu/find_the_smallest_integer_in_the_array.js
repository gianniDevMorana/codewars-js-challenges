function findSmallestInt(arr) {
  let smallestNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    console.log(value);

    if (smallestNum > value) {
      smallestNum = value;
    }
  }
  return smallestNum;
}
