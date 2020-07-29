// Code your solutions in this file
var messages = [];
function writeCards(people, event) {
  for (let i = 0; i < people.length; i++) {
    messages.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`)
  }
  return messages;
}

function countDown(num)  {
  while(num >= 0) {
    console.log(num)
    num--
  }
}