// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

// Here we start the counter at 0 because array have zero based indexes.
// In addition we stop it when the counter is at 1 below array length,
// which corresponds to the last index of the array
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

function writeCards(names, event_name) {
  let arr = [];

  for (let i = 0; i < names.length; i++) {
    arr.push(`Thank you, ${names[i]}, for the wonderful ${event_name} gift!`);
  }

  return arr;
}

function wrappingGifts(gifts) {
  let i = 0;

  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++;
  }

  return gifts;
}

function countdown(number) {
  let i = number;

  while (i >= 0) {
    console.log(i);
    i--;
  }
}
