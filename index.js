function writeCards(names, message) {
  const namesMessage = [];
  for (let i = 0; i < names.length; i++) {
    namesMessage.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
  }
  return namesMessage;
}


function countDown(num) {
  while ( num >= 0 ) {
    console.log( num )
    num--
  }
}
