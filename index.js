// Code your solutions in this file
function writeCards(people, event) {
  let returnArray = [];
  for (let i = 0; i < people.length; i++) {
    returnArray.push("Thank you, " + people[i] +", for the wonderful " + event + " gift!");
  }

  return returnArray;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
