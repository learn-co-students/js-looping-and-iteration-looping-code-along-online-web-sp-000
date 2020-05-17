function writeCards(peopleNames, eventName) {
    const thankYous = [];
    for (let i = 0; i < peopleNames.length; i++) {
        thankYous.push(`Thank you, ${peopleNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYous;
}

function countDown(int) {
    while (int >= 0) {
        console.log(int)
        int --
    }
}