// Code your solutions in this file
function writeCards(people, event) {
    const thankYou = [];
    for (let i = 0; i < people.length; i++) {
        thankYou.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
    }
    return thankYou;
}

function countDown(number) {
    let countUp = number;
    while (countUp >= 0) {
        console.log(countUp--)
    }
}