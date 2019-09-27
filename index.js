// Code your solutions in this file

function writeCards(names, event) {
  let results = [];
  for (let i = 0; i < names.length; i++) {
    results.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return results;
}

function countdown(n) {
  while (n >= 0) {
    console.log(n--);
  }
}