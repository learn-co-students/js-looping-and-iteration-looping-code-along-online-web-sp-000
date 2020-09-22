// Code your solutions in this file
function writeCards(names, events){
  const thanksCards = [];
  for (let i = 0; i < names.length; i++) {
    thanksCards.push("Thank you, " + names[i] + ", for the wonderful " + events  + " gift!");
  }
  return thanksCards;
}

function countDown(num) {
  for(let i = num; i>=0; i--) {
    console.log(i);
  }
}
