// Code your solutions in this file
function writeCards(cards, event) {
  let thankyou = []
  for (let i = 0; i<cards.length; i++) {
    thankyou.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
  }
  return thankyou
}

function countDown(number) {
  let bb = number;
  while ( bb >= 0 ) {
    console.log(bb);
    bb -= 1
  }
}