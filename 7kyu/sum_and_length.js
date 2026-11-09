function sumLength(array) {
  let sum = 0;
  let negativesLenght = 0;
  let zeroesCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    } else if (array[i] < 0) {
      negativesLenght++;
    } else if (array[i] === 0) {
      zeroesCount++;
      if (zeroesCount % 2 !== 0) {
        negativesLenght++;
      }
    }
  }
  return `${sum} ${negativesLenght}`;
}

console.log(sumLength([1,2,3,4,-1,-2,-3]));
console.log(sumLength([1,2,3,4,0,-1,-2,-3]));
console.log(sumLength([-1,2,3,4,0,1,0,-2,0,-3]));
console.log(sumLength([-1,-2,-3,-4,0,-1,0,-2,0,-3]));
console.log(sumLength([1,2,3,4,1,2,3]));
console.log(sumLength([0,0,0,0,0,0,0]));
console.log(sumLength([]));