function writeCards(arrayOfNames, eventName) {
  let cardArray = []
  for (let i = 0; i < arrayOfNames.length; i++) {
    
    cardArray.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`);
  }
return cardArray;
}

function countDown(number) {
  let countdown = number;
  while (countdown > -1) {
    console.log(countdown--);
  }
}
