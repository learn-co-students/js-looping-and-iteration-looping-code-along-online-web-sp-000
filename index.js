// Code your solutions in this file
function writeCards(girls, surprise) {
    let cardsArray = []
    for (let i = 0; i < girls.length; i++) {
        cardsArray.push(`Thank you, ${girls[i]}, for the wonderful ${surprise} gift!`)
    }
    return cardsArray
}

function countDown(i) {
    while(i >= 0) {
        console.log(i)
        i -= 1
    }
}