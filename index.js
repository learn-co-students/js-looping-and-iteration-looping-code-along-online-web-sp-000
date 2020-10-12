// Code your solutions in this file


 
function writeCards(names, eventName) {
  var cardArray = [];
  for (let i = 0; i < names.length; i++) {
    cardArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
 
  return cardArray;
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");



// The Count Down Function

function countDown(number) {
    let counter = 0;
    while (counter <= number){
        console.log(number--);
    }
}