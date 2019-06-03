// Code your solutions in this file
function writeCards(names, event) {
  const array = []
  for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return array
}

function countdown(number) {
  while (number >= 0) {
  console.log(number--);
}
}
