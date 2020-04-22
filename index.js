// Code your solutions in this file
function writeCards(names, ev) {
  let messages = [];
  for(let i = 0; i < names.length; i++) {
    let m = `Thank you, ${names[i]}, for the wonderful ${ev} gift!`;
    messages.push(m);
  }
  return messages;
}

function countDown(int) {
  while (int >= 0) {
    console.log(int--);
  }
}
