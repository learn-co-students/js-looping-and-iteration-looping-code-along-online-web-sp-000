// Code your solutions in this file
function writeCards(array, word){
  const messages = [];
  for(let name of array){
      messages.push(`Thank you, ${name}, for the wonderful ${word} gift!`);
  }
  return messages;
}

function countDown(number){
  while(number>-1){
    console.log(number);
    number --;
  }
}
