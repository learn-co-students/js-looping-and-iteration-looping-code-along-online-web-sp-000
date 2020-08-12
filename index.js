// Code your solutions in this file
function writeCards(names, event) {
  let greeting_array = [];
  for(let i = 0; i < names.length; i++) {
    let greeting = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    console.log(greeting)
    greeting_array.push(greeting)
  }
  return greeting_array;
}


function countDown(value) {
  let i = 0;
  while (value >= i) {
    console.log(value);
    value--;
  }
}
