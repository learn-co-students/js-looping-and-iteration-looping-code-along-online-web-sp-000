// Code your solutions in this file
function writeCards(names, eventName){
  let message = [];
  for (let  i = 0; i < names.length; i++){
    message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return message;
}

function countdown(number) {
  for(let i = number; i >= 0; i--){
    console.log(i);
  }
}