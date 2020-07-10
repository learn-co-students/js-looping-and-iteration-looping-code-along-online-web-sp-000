// Code your solutions in this file
function writeCards(name, message) {
    let allMessages = [];
    for (let i = 0; i < name.length; i++) {
        allMessages.push(`Thank you, ${name[i]}, for the wonderful ${message} gift!`);
    }
    return allMessages;
}

function countDown(inputNum) {
    let num = inputNum
    while (num >= 0) {
        console.log(num--)
    }
}