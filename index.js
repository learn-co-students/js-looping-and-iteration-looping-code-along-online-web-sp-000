// Code your solutions in this file


function writeCards(name, celebration) {
  let new_array = []
  for (let i = 0; i < name.length; i++) {
    new_array.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
  }
  return new_array;
}


function countDown(integer) {
  while (integer >= 0) {
    console.log(integer);
    integer--;
  }
}
