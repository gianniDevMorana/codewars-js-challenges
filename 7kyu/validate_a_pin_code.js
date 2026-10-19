function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  return pin.split("").every((char) => char >= "0" && char <= "9");
}
