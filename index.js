// Code your solutions in this file
let thankYous = []
function writeCards(names, celebration) {
    for (let i = 0; i < names.length; i++) {
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${celebration} gift!`);
    }
    return thankYous
}

function countDown(n) {
    let i = 0;
    while (i <= n) {
        console.log(i);
        i++;
    }
}