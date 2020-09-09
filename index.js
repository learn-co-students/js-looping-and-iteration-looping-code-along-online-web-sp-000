// Code your solutions in this file

function writeCards(namesArray, event){
  let thankYouCards = []
  for (let i = 0; i < namesArray.length; i++){
    // for loop contains the initializer, condition, and the iteration
    thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards
}
console.log(thankYouCards)

// let countDown = i;
function countDown(countdown){
  while (countdown > 0){
    console.log(countdown);
    countdown -= 1;
  }
  console.log(countdown);
}
