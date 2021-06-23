function fibonacciSequence(number) {
  var ouputSequence = [];

  if(number === 0){ 
    return "Please select a number greater than 0"; 
  }
  else if(number === 1) {
    ouputSequence = [0];
  }
  else if(number === 2) {
    ouputSequence = [0,1];
  }
  else{
    ouputSequence = [0,1];

    for(var i=2; i<number; i++){
      ouputSequence
        .push(ouputSequence[ouputSequence.length - 2] + ouputSequence[ouputSequence.length - 1]);
    }
  }
  return ouputSequence;
}

fibonacciSequence(5);