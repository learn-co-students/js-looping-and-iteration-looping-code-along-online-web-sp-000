// Code your solutions in this file

const array = [];

function writeCards(people, holliday) {
  for (let i = 0; i < people.length; i++) {
    array.push(`Thank you, ${people[i]}, for the wonderful ${holliday} gift!`);
  }
  return array;
}

function countDown(number) {
    let count = number;
    while(count >= 0) {
        console.log(count--);
    }
}

