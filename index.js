const names = ["Ada", "Brendan", "Ali"]
let msgCards = []

function writeCards(names, event) {
    for (let c = 0; c < names.length; c++) {
        msgCards.push(`Thank you, ${names[c]}, for the wonderful ${event} gift!`);
    }
  return msgCards;
}

function countDown(num) {
    while (num >= 0) {
      console.log(num--);
    }
  }