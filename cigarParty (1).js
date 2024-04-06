
  
function cigarparty(cigars,isWeekend){
    if((cigars >=40 && cigars <=60) && !isWeekend){
        return true;
    }
    if(cigars >= 40 && isWeekend){
        return true;
    }
    return false;
    }

