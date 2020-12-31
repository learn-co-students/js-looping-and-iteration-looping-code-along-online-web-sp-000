// Code your solutions in this file

let birthday = 'suprise'
const thankYou = [];

function writeCards(name, birthday) {
    for (let i = 0; i < name.length; i++) {
        let card = (`Thank you, ${name[i]}, for the wonderful ${birthday} gift!`)

        thankYou.push(card)
    }
    return thankYou
};

let num = 10
function countDown(num) {
    let i = -1
    while (num > i) {
        console.log(num--)
    }
};
countDown(num)