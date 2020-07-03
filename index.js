
const names = ["Ada", "Brendan", "Ali"];
const event = "birthday";

function writeCards(names, event){
    let thankYouArray = [];
    for(let i = 0; i < names.length; i++) {
        thankYouArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return thankYouArray;
}

const num = 10;

function countDown(num){
    while(num != -1)
    {
        console.log(num);
        num--;
    }
}