function abbrevName(name) {
  const nameSurname = name.split(" ");
  return (
    nameSurname[0].charAt(0) +
    "." +
    nameSurname[1].charAt(0)
  ).toUpperCase();
}
