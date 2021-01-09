// Code your solutions in this file

function writeCards(names, event) {
    let n = [];
    for (let i = 0; i < names.length; i++) {
        n.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return n;

}

function countDown(number) {
    let start = number;
    while (start >= 0) {
        console.log(start--);
    }


}