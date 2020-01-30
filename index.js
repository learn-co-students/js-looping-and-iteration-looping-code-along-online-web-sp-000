// Code your solutions in this file
const thankYouCards = []
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      }
     
    return thankYouCards;
  }



function countDown( countdown ) {
    while ( countdown > 0 ) {
      console.log( countdown );
      countdown -= 1;
    }
    console.log( countdown );
  }