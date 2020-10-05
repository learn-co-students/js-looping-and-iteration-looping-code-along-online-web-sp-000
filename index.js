// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function writeCards(names, event){
  var messages = new Array();
  for (let i = 0; i < names.length; i++){
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages
}

function countDown(number){
  for (let i = number; i >= 0; i--){
    console.log(i)
  }
}
 
