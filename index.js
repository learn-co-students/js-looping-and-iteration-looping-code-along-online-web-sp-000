// Code your solutions in this file
const arr = [];

function writeCards(cards, surprise) {
  for (let i = 0; i < cards.length; i++) {
    arr.push(`Thank you, ${cards[i]}, for the wonderful ${surprise} gift!`);
  }

  return arr;
}

function countDown(num) {
  for (let i = num; i > -1; i--) {
    console.log(num--);
  }

  return num;
}
