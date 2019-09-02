function writeCards(array, b) {
  let newArray = [];
  for (let c = 0; c < array.length; c++) {
    newArray.push(`Thank you, ${array[c]}, for the wonderful ${b} gift!`);
  }
  return newArray;
}

function countdown(n) {
  let cd = n;
  while (cd > - 1) {
    console.log(cd--);
  }
}
