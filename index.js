// Code your solutions in this file
function writeCards(array, event) {
    let thankYouArray = [];
    for (let x = 0; x < array.length; x++) {
        thankYouArray.push(`Thank you, ${array[x]}, for the wonderful ${event} gift!`);
    }
    return thankYouArray;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number = number - 1;
    }
}