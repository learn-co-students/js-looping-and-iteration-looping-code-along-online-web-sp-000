 const names = ["Ada", "Brendan", "Ali"]
 const event = 'birthday'

function writeCards(names, event) {
    let cardsArray = []
    for (let i = 0; i < names.length; i++) {
        cardsArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cardsArray
}

function countDown(i) {
    while (i >= 0) {
        console.log(i)
        i -= 1
    }
}