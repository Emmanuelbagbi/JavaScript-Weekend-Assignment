function sumWithSameDigits(a, b) {
    const sum = a + b;
    const aDigits = String(a).length;
    const sumDigits = String(sum).length;

    if (sumDigits === aDigits) {
        return sum;
    } else {
        return a;
    }
}
