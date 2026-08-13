function peopleWithAgeDrink(old) {
  let result = "";

  if (old < 14) {
    result = "drink toddy";
  } else if (old < 18) {
    result = "drink coke";
  } else if (old < 21) {
    result = "drink beer";
  } else {
    result = "drink whisky";
  }
  return result;
}
