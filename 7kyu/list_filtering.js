function filter_list(l) {
  const lFiltered = [];
  for(let i = 0; i < l.length; i++) {
    const value = l[i];
    if (typeof value === "number") {
      lFiltered.push(value);
    }
  }
  return lFiltered;
}

console.log(filter_list([1,2,'a','b']));