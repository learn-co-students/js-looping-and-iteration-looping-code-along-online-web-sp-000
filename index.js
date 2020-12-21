// Code your solutions in this file
function writeCards(array, event) {
  let thankYouArray = []; 
  for(let i = 0; i < array.length; i++){
    thankYouArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouArray;
}

function countDown(integer){
  let i = integer; 
  while (integer >=0) {
    console.log(integer--);
  }
}