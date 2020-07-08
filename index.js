// Code your solutions in this file
const cards = ['Lisa', 'Kaitlin', 'Jan'];
const event = ['surprise'];

function writeCards(cards) {
    let result = [];
    for (let i = 0; i < cards.length; i++) {
        result.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
    return result;
}

function countDown(num) {
    let i = num;
    while (i > -1) {
        console.log(i);
        i--;
    }
}

