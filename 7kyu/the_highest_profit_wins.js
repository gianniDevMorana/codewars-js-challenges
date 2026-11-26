function minMax(arr){
const minMaxArr = [];

  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > min) {
      min = num;
    }
    if (num < max) {
      max = num;
    }
  }
  minMaxArr.push(min);
  minMaxArr.push(max);

  function compareArr(a, b) {
    return a - b;
  }

  return minMaxArr.sort(compareArr);
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([5]));