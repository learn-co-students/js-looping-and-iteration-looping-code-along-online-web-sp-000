// Code your solutions in this file

let thankYouMessages = [];

function writeCards(namesArray, event) {
    for (let i = 0; i < namesArray.length; i++) {
        thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouMessages
}

function countdown(countdown) {
    while (countdown > 0) {
        console.log(countdown);
        countdown -= 1;
    }
    console.log(countdown);
}