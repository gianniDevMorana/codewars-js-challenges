function repeatStr(n, s) {
  // if (n === 1) {
  //     return s;
  // } else if (n === 2) {
  //     return s + s;
  // } else if (n === 3) {
  //     return s + s + s;
  // }

  // let result = "";
  // if (0 < n) {
  //     result += s;
  // }
  // if (1 < n) {
  //     result += s;
  // }
  // if (2 < n) {
  //     result += s;
  // }
  // if (3 < n) {
  //     result += s;
  // }

  let result = "";

  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}
