// Code your solutions in this file
function writeCards(names, word) {
    const cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${word} gift!`)
    }
    return cards
}

function countDown(num) {
    let i = num
    while (i>=0) {
        console.log(i)
        i--
    }
}