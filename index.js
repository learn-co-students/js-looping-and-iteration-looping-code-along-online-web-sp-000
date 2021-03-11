function writeCards(array, event) {
    let thankYous = []
    for (let i = 0; i < array.length; i++) {
        thankYous.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return thankYous;
}

function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}