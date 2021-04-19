// Code your solutions in this file

function writeCards(people, occasion) {
    const cards = []

    for (let index = 0; index < people.length; index++) {
        cards.push(`Thank you, ${people[index]}, for the wonderful ${occasion} gift!`)
        
    }
    return cards
}

function countDown(num) {
    let i = num
    while (i >= 0) {
        console.log(i)
        i--
    }
}