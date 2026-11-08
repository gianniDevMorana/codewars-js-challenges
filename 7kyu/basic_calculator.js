function calculate(a, operator, b) {
  if (operator === "/" && b === 0) {
    return null;
  } else if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "/") {
    return a / b;
  } else if (operator === "*") {
    return a * b;
  } else {
    return null;
  }
}

console.log(calculate(3.2, "+", 8));
console.log(calculate(3.2, "-", 8, -4.8));
console.log(calculate(3.2, "/", 8, 0.4));
console.log(calculate(3.2, "*", 8, 25.6));
console.log(calculate(-3, "+", 0, -3));
console.log(calculate(-3, "-", 0, -3));
console.log(calculate(-3, "/", 0));
console.log(calculate(-2, "/", -2, 1));
console.log(calculate(-3, "*", 0, 0));
console.log(calculate(-3, "w", 0));
