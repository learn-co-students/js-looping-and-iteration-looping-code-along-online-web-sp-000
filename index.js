const namesArray = []

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    namesArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return namesArray
}

function countDown(number) {
  let count = number;
  while (count > -1) {
    console.log(count--);
  }
}
