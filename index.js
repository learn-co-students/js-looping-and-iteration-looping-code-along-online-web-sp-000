// Code your solutions in this file
// for (let age = 30; age < 40; age++){
//   console.log(`I'm ${age} years old. Happy Birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++){
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//   return gifts;
// }
// wrapGifts(gifts);

let names = ["Lisa", "Kaitlin", "Jan"]
let occassion = "surprise"

function writeCards(names, occassion){
  let cards = []
  for(let i = 0; i < names.length; i++){
  cards.push(`Thank you, ${names[i]}, for the wonderful ${occassion} gift!`);
  }
  return cards;
}

writeCards(names, occassion);


function countDown(int){
  while (int >= 0){
    console.log(int--);
  } 
}
countDown(4);
