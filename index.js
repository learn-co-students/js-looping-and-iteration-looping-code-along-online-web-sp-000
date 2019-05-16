// Code your solutions in this file
function writeCards(array, event_name) {
  let cardsArray = []
  for (let counter = 0; counter < array.length; counter++) {
    cardsArray.push(`Thank you, ${array[counter]}, for the wonderful ${event_name} gift!`);
  }
  return cardsArray;
}

function countdown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
