// Code your solutions in this file


 
function writeCards(cards, message) {
  for (let i = 0; i < cards.length; i++) {
    console.log(`Thank you, ${cards[i]}, for the wonderful ${message} gift!`);
  }
 
  return cards;
}
writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");



function countDown(number) {
    let counter = 0;
    while (counter <= number){
        console.log(number--);
    }
}