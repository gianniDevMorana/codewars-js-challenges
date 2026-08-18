function disemvowel(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    switch (char.toLowerCase()) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        continue;
    }
    result += char;
  }
  return result;
}
