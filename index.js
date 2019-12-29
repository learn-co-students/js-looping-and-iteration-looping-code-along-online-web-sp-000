// Code your solutions in this file


const names = []
const occassion = "Birthday"
let messages = []

function writeCards(names, occassion) {
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

    return messages;
}

function countDown(number) {
    for (let i = number; number >= 0; number--) {
        console.log(number);
    }
}