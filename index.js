// Code your solutions in this file
function writeCards(array, event) {
    let name = []
    for (let i = 0; i < array.length; i++) {
      name.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }

    return thankyou;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--)
    }
}