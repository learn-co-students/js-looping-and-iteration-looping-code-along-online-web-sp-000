// Code your solutions in this file
function writeCards(names, event) {

  let messages = []
  
  for (let n=0; n < names.length; n++) {
    messages.push(`Thank you, ${names[n]}, for the wonderful ${event} gift!`)
  }

  return messages

}

function countDown(integer) {
  
  while (integer >= 0) {
    console.log(integer--)
  }

}