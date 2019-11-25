// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"]

function wrapGift(gifts) {
    for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bowl`);
  }
  return gifts;
}

// wrapGift(gifts);


// let countup = 0;
// while (countup < 10) {
//   console.log(countup++);
// }


// for (let countup = 10; countup > 0; countup--) {
//   console.log(countup);
// }


function writeCards(namesArray, occasion) {
  const j = [];
  for (let i = 0; i < namesArray.length; i++) {
    j.push(`Thank you, ${namesArray[i]}, for the wonderful ${occasion} gift!`);
  }
  console.log(j)
  return j
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");
countDown(11);
