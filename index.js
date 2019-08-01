// Code your solutions in this file
function writeCards(people, typeOfGift) {
    const messages = [];
    for ( let i=0; i < people.length; i++ ) {
        messages.push(`Thank you, ${people[i]}, for the wonderful ${typeOfGift} gift!`);
    }
    return messages;
}

function countdown(number){
    for (let i=number; i>=0; i--) {
        console.log(i);
    }
}