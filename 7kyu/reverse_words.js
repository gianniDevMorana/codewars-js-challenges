function reverseWords(str) {
  const array = str.split(" ");
  const reverseWordsArr = [];
  for (let i = 0; i < array.length; i++) {
    reverseWordsArr.push(array[i].split("").reverse().join(""));
  }
  return reverseWordsArr.join(" ");
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log(reverseWords('apple'));
console.log(reverseWords('a b c d'));
console.log(reverseWords('  double  spaced  words  '));