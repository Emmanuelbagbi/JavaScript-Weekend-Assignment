function inOrderEqual(a, b, c, equalOk){
  if (equalOk) {
    return a <= b && b <= c;
  }else {
    return a < b && b < c;
  }
}