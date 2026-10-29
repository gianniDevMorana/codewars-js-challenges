function countPositivesSumNegatives(input) {
  let countAndSum = [];
  let count = [];
  let sum = 0;

  if (input === null || input.length === 0) {
    return [];
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count.push(input[i]);
    }

    if (input[i] < 0) {
      sum += input[i];
    }
  }

  countAndSum.push(count.length);
  countAndSum.push(sum);
  return countAndSum;
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ]),
);
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ]),
);
console.log(countPositivesSumNegatives(null));
console.log(countPositivesSumNegatives([]));
