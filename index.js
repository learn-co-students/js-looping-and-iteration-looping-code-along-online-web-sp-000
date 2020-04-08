// Code your solutions in this file
function writeCards(nameArray, message) {
  let messageArray = [];
  for (let i = 0; i < nameArray.length; i++) {
    messageArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${message} gift!`);
  }
  return messageArray;
}

function countDown(inputNum) {
  let num = inputNum
  while (num >= 0) {
    console.log(num--)
  }
}
