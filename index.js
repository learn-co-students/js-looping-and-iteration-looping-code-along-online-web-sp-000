// Code your solutions in this file
//const gifts = ["teddy bear", "drone", "doll"];
//
//function wrapGifts(gifts) {
//  for (let i = 0; i < gifts.length; i++) {
//    console.log(`Wrapped ${gifts[i]} and added a bow!`);
//  }
//
//  return gifts;
//}
//
//wrapGifts(gifts);


function writeCards(arrayOfNames, eventName) {
let finalArray = [];
for (let i = 0; i < arrayOfNames.length; i++){

  finalArray.push( `Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`);
}
return finalArray;
}

function countDown(number){
while (number > -1){
  console.log(number--);
}
}
