// Code your solutions in this file
let newArray = [];
function writeCards(names, events) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }

return newArray;
}

let newNumbers = [];
function countDown(number){
while (number >= 0) {
  console.log(number--);
}
}
