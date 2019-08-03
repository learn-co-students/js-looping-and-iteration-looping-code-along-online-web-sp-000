// writeCards(["Ada", "Brendan", "Ali"], "birthday");
function writeCards(stringNames, eventName) {
  let array = new Array;
  for (let i = 0; i < stringNames.length; i++) {
    array.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`);
  }
  return array;
}

//countdown(10);

function countdown(counter) {
  while (counter > -1) {
    console.log(counter);
    counter--
  }
}
