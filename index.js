// Code your solutions in this file
var people = [];
function writeCards(cards, event) {
    for (let i = 0; i < cards.length; i++) {
        people.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
    return people;
}


function countDown(number) {
    while(number >= 0) {
        console.log(number)
        number--
    }
}