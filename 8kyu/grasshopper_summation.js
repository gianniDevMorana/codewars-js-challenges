var summation = function (num) {
  // return (num + 1) * (num / 2);

  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};
