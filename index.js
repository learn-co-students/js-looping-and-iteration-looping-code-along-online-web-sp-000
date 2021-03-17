// Code your solutions in this file
function writeCards(names, event) {
    let cards = []
    let i = 0;
    while (i < names.length) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        i++;
    }
    return cards;
}

// function countDown(start){
//     for (let i = start; i >= 0; i-- ) {
//         console.log(`${i}`)
//     }

// }

// the output of this counDown looks like it should satisfy the tests but it doesn't. it still logs the same way

function countDown(number){
    while ( number > 0 ) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}