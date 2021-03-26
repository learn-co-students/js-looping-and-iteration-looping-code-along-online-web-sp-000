// Code your solutions in this file
function writeCards(cards, event) {
    let written = [];

    for (let i = 0; i < cards.length; i++) {
      written.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }

    return written;
  }

function countDown(i) {
    while(i > -1) {
        console.log(i--)
    }
}
