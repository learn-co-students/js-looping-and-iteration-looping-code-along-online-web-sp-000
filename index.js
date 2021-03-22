function writeCards(name, event) {
    let cards = [];
    for (let i = 0; i < name.length; i++) {
        cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }

    return cards;
}

function countDown(count) {
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
    return count;
}
