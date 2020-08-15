// Code your solutions in this file
const name = []

function writeCards(name, celebration) {
  for (let i = 0; i < name.length; i++) {
    console.log(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
  }
  return name;
}

writeCards(name);


function countDown(integer) {
  while (integer < 0) {
    console.log(integer++);
  }
}
