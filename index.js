// Code your solutions in this file
let thankYous = []

function writeCards(names, type) {
  for (let i = 0; i < names.length; i++) {
    thankYous[i] = `Thank you, ${names[i]}, for the wonderful ${type} gift!`;
  }

  return thankYous
}

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}
