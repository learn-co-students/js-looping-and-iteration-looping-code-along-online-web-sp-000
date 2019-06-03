// Code your solutions in this file
function writeCards (nameArray, eventName) {
  let myArray = []
  for (let i =0; i<nameArray.length; i++) {
    myArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`);
  }
  return myArray;
}

function countdown(myInteger) {
  while(myInteger >= 0) {
    console.log(myInteger);
    myInteger -=1;
  }
}
