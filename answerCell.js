function answerCell(isMorning, isMomCalling, isAsleep) {
    if (isAsleep) {
        return false; 
    } else if (isMorning) {
        return isMomCalling;  
    } else {
        return true; 
    }
}