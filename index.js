// Code your solutions in this file


function writeCards(namesArray, event) {
    let writtenCards =[]
    for (let i = 0; i < namesArray.length; i++) {
        writtenCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return writtenCards
}

function countDown( int) {
    while (int >= 0) {
        console.log(int--)
    }
}