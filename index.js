// Code your solutions in this file
function writeCards(names, event) {
  let thankYouNotes = [];
  for (let i = 0; i < names.length; i++) {
    thankYouNotes.push(
      `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    );
  }
  return thankYouNotes;
}

const friends = ["Joe", "Toria", "Mac"];

writeCards(friends, "Christmas");

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
  return number;
}
