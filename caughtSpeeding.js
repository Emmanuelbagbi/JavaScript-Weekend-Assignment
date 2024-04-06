function caughtSpeeding(speed, isBirthday){
  if(speed <= 60){
    return 0;
  }
  else if ((speed >= 61 && speed <= 80) && !isBirthday){
  return 1;
  }
  else if((speed >= 81) && !isBirthday){
  return 2;
  }
  else if(speed >=75 && isBirthday){
  return 1;
  }
  else{
  return 0;
  }
}