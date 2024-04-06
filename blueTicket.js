function blueTicket(a, b, c){
    let abSum = a + b;
    let bcSum = b + c;
    let acSum = a + c;

    if (abSum === 10 || bcSum === 10 || acSum === 10) {
        return 10;
    } else if (abSum - bcSum === 10 || abSum - acSum === 10) {
        return 5;
    } else {
        return 0;
    }
}
 
