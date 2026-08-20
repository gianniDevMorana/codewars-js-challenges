function lovefunc(flower1, flower2) {
  inlove = true;
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    inlove;
  } else {
    inlove = false;
  }
  return inlove;
}

console.log(lovefunc(3, 3));
