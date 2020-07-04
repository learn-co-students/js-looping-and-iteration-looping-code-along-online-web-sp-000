const names = ["Ada", "Brendan", "Ali"];

const event = "birthday";

function writeCards(names, event){
    let cardarray = [];
    for(let i = 0; i < names.length; i++) {
        cardarray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cardarray
}

const num = 10
function countDown(i){
    while(i > -1) {
        console.log(i);
        i--;
    }
}