// Code your solutions in this file
function writeCards(people, typeOfGift) {
    const messages = [];
    for ( let i=0; i < people.length; i++ ) {
        messages.push(`Thank you, ${people[i]}, for the wonderful ${typeOfGift} gift!`);
    }
    return messages;
}

function countdown(number){
    while (number >= 0) {
        console.log(number)
        number--;
    }
}