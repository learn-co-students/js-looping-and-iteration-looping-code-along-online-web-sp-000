// Code your solutions in this file
function writeCards(names, event) {
    let cardArray = [];
    for (let i = 0; i < names.length; i++) {
        cardArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cardArray;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(num) {
    while (num > -1) {
        console.log(num--);
    }
}

countDown(10);