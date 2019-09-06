// Code your solutions in this file

function writeCards(array, event) {
  let cards = []
  for (let i = 0; i < array.length; i++) {
    cards.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
  }
  return cards
}

function countdown(num) {
  while (num >= 0) {
    console.log(num)
    num--
  }
}