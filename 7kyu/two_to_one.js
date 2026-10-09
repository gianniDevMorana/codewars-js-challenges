function longest(s1, s2) {
  const uniqueSet = new Set(s1 + s2);
  const uniqueArray = [...uniqueSet];
  return uniqueArray.sort().join("");
}
