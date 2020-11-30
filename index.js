// Code your solutions in this file
// Thank you, Lisa, for the wonderful surprise gift!'

function writeCards(names) {
    const cards = [];
    for (let index = 0; index < names.length; index++) {
        cards.push(`Thank you, ${names[index]}, for the wonderful surprise gift!`)   
    }
    return cards;
    
}

function countDown(number) {

    while (number >= 0) {
       console.log(number)
       number--
    }
    
}