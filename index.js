function writeCards(names, holiday) {
  let messages = []
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`)
  }
  return messages
}

function countdown(number) {
  while (number >= 0) {
    console.log(number)
    number--
  }
}