
  function redTicket(a, b, c) {
    if (a === b && b === c) {
        return 20;
    } else if (a === b || a === c || b === c) {
        return 10;
    } else {
        return 0;
    }
}
