// Code your solutions in this file

function writeCards(array, event_name) {

    let new_array = []

    for (let i = 0; i < array.length; i++) {
        new_array.push(`Thank you, ${array[i]}, for the wonderful ${event_name} gift!`)
    }

    return new_array
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--)
    }
}