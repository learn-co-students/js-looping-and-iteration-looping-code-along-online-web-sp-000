// Code your solutions in this file


function writeCards(person, occasion) {
  let cards = []
  for (let i = 0; i < person.length; i++) {
    cards.push(`Thank you, ${person[i]}, for the wonderful ${occasion} gift!`);
  }
  return cards

}


function countDown(num) {
  let count = 0
  while (count <= num) {
    console.log(num - count)
    count++
  }

}
