// Code your solutions in this file


const names = ["Ada", "Brendan", "Ali"];
const event = "birthday";

function writeCards (names, event) {
  let thankYous = []
  for (let i = 0; i < names.length; i++) {
    thankYous.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }

  return thankYous;
}

function countdown (number) {
  while (number > 0) {
    console.log(number);
    number -= 1;
  }

  console.log (number);

}
