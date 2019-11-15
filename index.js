// Code your solutions in this file


function writeCards(name) {
  let array = [];
  for (let i = 0; i < name.length; i++) {
    array.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
  }
 
  return array;
}
 

function countdown(num) {
  while (num >= 0) {
    console.log(num--)
  }
}

