// Code your solutions in this file
function writeCards(names, event) {
    let message = []
    for (let i = 0; i < names.length; i++) {
       message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return message
}

function countDown(start) {
    while (start >= 0) {
        console.log(start--)
    }
}