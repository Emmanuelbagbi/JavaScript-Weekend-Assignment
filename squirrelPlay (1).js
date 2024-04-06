function squirrelPlay(temp, isSummer){
 if ((squirrelPlay >= 60 && squirrelPlay <= 90) && !isSummer) {
        return(true);
    } if (squirrelPlay >= 90 && !isSummer){
        return(true);
    }

    return false;
}
}