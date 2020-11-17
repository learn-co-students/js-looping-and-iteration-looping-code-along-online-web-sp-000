// Code your solutions in this file
function writeCards(namesArray, celebration) {
    let messages = []
    for (let i = 0; i < namesArray.length; i++) {
        messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${celebration} gift!`);
    }

    return messages
}

function countDown(n) {
    while (n > -1) {
        console.log(n)
        n--
    }
}