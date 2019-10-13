// Code your solutions in this file
//const names = ["Ada", "Brendan", "Ali"];

function writeCards(names, holiday) {
  let cards = []
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`);
  }

  return cards;
}

function countdown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
  return true;
}
