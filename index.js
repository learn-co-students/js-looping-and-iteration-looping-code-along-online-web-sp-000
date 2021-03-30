// Code your solutions in this file
function writeCards(cards, event) {
    const greetings = [];
    for (let i = 0; i < cards.length; i++) {
    greetings.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
return greetings;
}

writeCards(["Lisa", "Kaitlin", "Jan"])

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}
countDown(10);