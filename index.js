// Code your solutions in this file

const cards = (["Lisa", "Kaitlin", "Jan"]);
 
function writeCards(cards, event) {
  let result = []
  for (let i = 0; i < cards.length; i++) {
    result.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
  }
  return result
}

function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber >= 0) {
        countDown(nextNumber);
    }
}
countDown(10);
 


