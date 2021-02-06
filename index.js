// Code your solutions in this file
function writeCards(names, eventName) {
    const messages = ["Thank you, Lisa, for the wonderful surprise gift!", "Thank you, Kaitlin, for the wonderful surprise gift!", "Thank you, Jan, for the wonderful surprise gift!"];
    for (let i = 0; i < names; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
    return number;
}
