function withoutDoubles(die1, die2, noDoubles){
  if (noDoubles && die1 === die2) {
        if (die1 === 6) {
            return die1 + 1;
        } else {
            return die1 + die2 + 1;
        }
    } else {
        return die1 + die2;
    } 
}