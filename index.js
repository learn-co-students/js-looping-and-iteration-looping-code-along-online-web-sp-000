// Code your solutions in this file
function writeCards(name, event) {
    let messages = [];
    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(int) {
    let i = int;
    while (i >= 0) {
        console.log(i);
        i--
    }
}