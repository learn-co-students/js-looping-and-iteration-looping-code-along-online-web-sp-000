function countDown(start){
  for (let i = start; i >= 0; i--){
    console.log(i)
  }
}

function writeCards(names){
  let arrayOfMessages = [];

  for (let i = 0; i < (names.length); i++){
    arrayOfMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }

  return arrayOfMessages;
}
