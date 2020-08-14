function writeCards(cards) {
  let messages = [];
  for (let i = 0; i < cards.length; i++) {
    messages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
  }
  return messages;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number)
    number--
  }
}