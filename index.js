// Code your solutions in this file


//function that accepts 2 arguments : array of names and an event name
//
// create an array before you loop
//
// and then store the sentences into that new array
//
// then return the new array from the function

const names = ['Lisa', 'Kaitlin', 'Jan'];
const event = 'birthday';

function writeCards(names, event) {
let newPhrase = [];
  for (let i = 0; i < names.length; i++) {
    newPhrase.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return newPhrase;
  }




  // let countDown;
  // countDown = 11;
  // while (countDown > 1) {
  //   console.log(countDown--);
  // }
