// Code your solutions in this file

function writeCards(array, event) {
    let new_array = []
    for (let i = 0; i < array.length; i++) {
        new_array.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return new_array;
}


function countDown(integer) {
    while (integer > 0) {
        console.log(integer);
        integer -= 1;
    }
    console.log(integer);
}
