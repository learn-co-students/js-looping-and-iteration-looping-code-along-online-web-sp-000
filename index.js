// Code your solutions in this file
function writeCards(names, eventName) {
  const returnArray = [];
  for(let i = 0; i < names.length; i++) {
    returnArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return returnArray;
}

function countdown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}
