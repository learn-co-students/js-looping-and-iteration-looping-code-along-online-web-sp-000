function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
 
  return messages;
}

function countDown(value) {

    while (value > -1) {
        console.log(value);
        value--;
    }
  }