function squirrelPlay(temp, isSummer){
 if ((squirrelPlay >= 60 && squirrelPlay <= 90) && !isSummer) {
        return(true);
    } if (squirrelPlay >= 90 && !isSummer){
        return(true);
    }

    return false;
}
}
console.log(temp(30,true))