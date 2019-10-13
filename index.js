function writeCards(someArray, eventName) {
    let thankYouCards = [];
    for (let i = 0; i < someArray.length; i++) {
        thankYouCards.push(
            `Thank you, ${someArray[i]}, for the wonderful ${eventName} gift!`
        );
    }
    return thankYouCards;
}

function countdown(countdown) {
    while (countdown > 0) {
        console.log(countdown);
        countdown -= 1;
    }
    console.log(countdown);
}