import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

// Code your solutions in this file
function writeCards(array, event) {
    let cards = []
    for (let i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

// function countDown(num) {
//     while (num > 0) {
//         console.log(num);
//         num -= 1;
//     }
//     console.log(num);
// }

function countdown( countdown ) {
    while ( countdown > 0 ) {
      console.log( countdown );
      countdown -= 1;
    }
    console.log( countdown );
  }