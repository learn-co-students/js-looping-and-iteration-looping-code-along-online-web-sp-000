// Code your solutions in this file
function writeCards(names, giftType) {
    const retArr = [];
    for (let i = 0; i < names.length; i++) {
        retArr[i] = `Thank you, ${names[i]}, for the wonderful ${giftType} gift!`;
    }
    return retArr;
}

function countdown(num) {
    let i = 0;
    while (i <= num) {
        console.log(num-i);
        ++i;
    }
}