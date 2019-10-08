function writeCards(names, event) {
  const messageArray = [];
  for (let i = 0; i < names.length; i++) {
    messageArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return messageArray;
}

function countdown(num) {
  let i = num;

  while (i >= 0) {
    console.log(i);
    i--;
  }
}