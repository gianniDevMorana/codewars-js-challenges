function descendingOrder(n) {
  let nStr = n.toString();
  let array = [];
  for (let i = 0; i < nStr.length; i++) {
    array.push(nStr[i]);
  }

  function compareFn(a, b) {
    return b - a;
  }

  let descendingOrder = array.sort(compareFn);
  return parseInt(descendingOrder.join(""));
}
