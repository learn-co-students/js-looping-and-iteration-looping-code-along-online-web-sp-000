// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"]

function wrapGift(gifts) {
    for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bowl`);
  }
  return gifts;
}

wrapGift(gifts);


let countup = 0;
while (countup < 10) {
  console.log(countup++);
}


for (let countup = 10; countup > 0; countup--) {
  console.log(countup);
}