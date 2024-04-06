
 function shareDigit(a, b) {
    let aLeft = Math.floor(a / 10);
    let aRight = a % 10;
    let bLeft = Math.floor(b / 10);
    let bRight = b % 10;

    return aLeft === bLeft || aLeft === bRight || aRight === bLeft || aRight === bRight;
} 
