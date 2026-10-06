function accum(s) {
  let sArr = [];
  for (let i = 0; i < s.length; i++) {
    sArr.push(s[i].toUpperCase() + s[i].repeat(i).toLowerCase());
  }
  return sArr.join("-");
}
