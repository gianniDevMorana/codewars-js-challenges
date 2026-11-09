function calculate(a, operator, b) {
  let result = null;
  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "/" && b !== 0) {
    result = a / b;
  } else if (operator === "*") {
    result = a * b;
  }
  return result;
}

console.log(calculate(3.2, "+", 8));
console.log(calculate(3.2, "-", 8));
console.log(calculate(3.2, "/", 8));
console.log(calculate(3.2, "*", 8));
console.log(calculate(-3, "+", 0));
console.log(calculate(-3, "-", 0));
console.log(calculate(-3, "/", 0));
console.log(calculate(-2, "/", -2));
console.log(calculate(-3, "*", 0));
console.log(calculate(-3, "w", 0));
