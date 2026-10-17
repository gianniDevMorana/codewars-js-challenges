function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  }

  const showDigits = cc.slice(cc.length - 4, cc.length);
  return "#".repeat(cc.length - 4) + showDigits;
}
