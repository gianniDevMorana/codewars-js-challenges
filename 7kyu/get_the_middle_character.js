function getMiddle(s) {
  let middleChar = "";
  if (s.length % 2 === 0) {
    middleChar = `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
  } else if (s.length % 2 !== 0) {
    middleChar = `${s[Math.floor(s.length / 2)]}`;
  }
  return middleChar;
}
