// Code your solutions in this file
const writtenCards = [];
function writeCards(people, event) {
    for (let i = 0; i < people.length; i++ ) {
        writtenCards.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
    }
    return writtenCards
}

function countDown(positiveInteger) {
    while (positiveInteger > -1) {
        console.log(positiveInteger);
        positiveInteger = positiveInteger - 1;
    }
}