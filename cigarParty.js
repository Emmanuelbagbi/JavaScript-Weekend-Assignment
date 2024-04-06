function cigarParty(cigars, isWeekend){
  function cigarparty(cigars,isWeekend){
    if(cigars >=40 && cigars <=60 && !isWeekend){
        return true;
    }
    if(cigars >= 40 && isWeekend){
        return true;
    }
    return false;
    }

    console.log(cigarparty(70, true));

}