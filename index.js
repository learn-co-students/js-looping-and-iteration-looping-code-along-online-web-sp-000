// Code your solutions in this file
function writeCards(names, event) {
  const output = [];
  for (let i = 0; i < names.length; i++) {
    output.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
  }
  return output;
}

function countdown(number) {
  let i = number
  while (i >= 0) {
    console.log(i)
    i--
  }
}
