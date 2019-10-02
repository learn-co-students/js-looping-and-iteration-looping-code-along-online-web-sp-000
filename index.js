// Code your solutions in this file
function writeCards(cards, day) {
  const array = []
  for (let i = 0; i < cards.length; i++)
  {array.push(`Thank you, ${cards[i]}, for the wonderful ${day} gift!`)}
  return array
}


function countdown(num) {
  let i = num
  while (i >= 0){
    console.log(i)
    i--
  }
}
