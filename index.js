

function writeCards(names, eventName) {
    const arr = [];
    for (let i = 0; i < names.length; i++) {
        arr.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return arr;
}



function countDown(int) {
    while (int >= 0) {
        console.log(int);
        int --;
    }
}
