// Code your solutions in this file
function writeCards(names, event) {
    let cardsArray = [];

    for (let i = 0; i < names.length; i++) {
        cardsArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return cardsArray;
}

function countdown(anInteger) {
    while(anInteger >= 0) {
        console.log(anInteger--);
    }
}