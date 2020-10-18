function writeCards(array, event) {
    const thankYous = []
    for (let i = 0; i < array.length; i++) {
        thankYous.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }

    return thankYous
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer -= 1;
    }
}