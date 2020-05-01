// Code your solutions in this file
function writeCards(array, event) {
    let thankyou = []
    for (let i = 0; i < array.length; i++) {
      thankyou.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
   
    return thankyou;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--)
    }
}