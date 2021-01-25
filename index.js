// Code your solutions in this file
function writeCards(names, event)   {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return thankYouCards
}

function countDown(number) {
     // the initialization moves OUTSIDE the body of the loop!
    while (number > 0) {
        console.log(number);
        number = number - 1; // the iteration moves INSIDE the body of the loop!
    }

    console.log(number);
}
