// Code your solutions in this file
function writeCards(array, event_name){
  for (let i = 0; i < array.length; i++) {
    array[i] = `Thank you, ${array[i]}, for the wonderful ${event_name} gift!`;
  }
  return array;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}