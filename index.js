// Code your solutions in this file
function writeCards(names, celebration) {

    let thankYouCards = [];

    for(let i = 0; i < names.length; i++ ) {
        thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${celebration} gift!`);
    }

    return thankYouCards;
}


function countdown(number) {

    while (number > 0) {
        console.log(number);
        number -= 1;
    }

    console.log(number);
}
