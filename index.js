// Code your solutions in this file
function writeCards(names, event) {
    const thankyouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankyouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankyouMessages;
}

function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}