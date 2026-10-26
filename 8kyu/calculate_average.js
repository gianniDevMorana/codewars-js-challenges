function findAverage(array) {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average += array[i] / array.length;
  }
  return average;
}

console.log(findAverage([1,1,1]));
console.log(findAverage([1,2,3]));
console.log(findAverage([1,2,3,4]));
console.log(findAverage([0,0,0]));