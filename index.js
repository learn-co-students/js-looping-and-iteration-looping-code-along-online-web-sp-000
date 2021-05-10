// Code your solutions in this file
function writeCards(names, eventName) {
    for (let i = 0; i < names.length; i++) {
        let name = names[i]
        names[i] = `Thank you, ${name}, for the wonderful ${eventName} gift!`
    }

    return names;
}

function countDown(num) {
    while(num >= 0) {
        console.log(num);
        num--;
    }
}