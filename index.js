// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}
wrapGifts(gifts);

function writeCards(names, type) {
const cards = [];
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
  }
  return cards;
}
writeCards([ 'Lisa', 'Kaitlin', 'Jan' ], "birthday");

function countDown(n) {
  for (let cd = n; cd >= 0; cd--) {
    console.log(cd);
  }
}
