// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}
 
wrapGifts(gifts);

function writeCards(collection, event) {
    let greetings = [];
    for (let i = 0; i < collection.length; i++) {
        greetings.push(`Thank you, ${collection[i]}, for the wonderful ${event} gift!`);
    }
    console.log(greetings);
    return greetings;
}

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i)
        i--;
    }
}

counntDown(10);