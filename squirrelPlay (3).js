function squirrelPlay(temp, isSummer){
 if ((squirrelPlay >= 60 && squirrelPlay <= 90) && !isSummer) {
        return(true);
    } if (squirrelPlay >= 90 && !isSummer){
        return(false);
    }else if(squirrelPlay >= 90 && squirrelPlay <= 95 && isSummer)
      return(true);
  
    return false;
}
