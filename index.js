// Code your solutions in this file
function writeCards(array, name){
    let thankYouCards = [];
    for(let  i = 0; i < array.length; i++){
      thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`);
    }
    return thankYouCards;
}

function countDown(number){
  while(0 < number){
    console.log(number);
    number -= 1;
  }
  console.log(number);
}
