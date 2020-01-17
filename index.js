// Code your solutions in this file
const people = ["Ada", "Brendan", "Ali"];
const event = 'birthday';
let array = []

function writeCards(people, event) {
  for (let i = 0; i < people.length; i++){
    let greeting = ('Thank you, ' + people[i] + ', for the wonderful surprise gift!');
    array.push(greeting)
  }
  return array;
}

function countDown(num) {
  while (num >=0) {
    console.log(num);
    num--;
  }
}
