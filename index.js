// Code your solutions in this file

function writeCards(names, type){ 
   let ThankYouCards = []
   for (let i= 0; i < names.length; i++)
     {ThankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`)
    }
    return ThankYouCards
}

function countDown(i) {
    while (i >= 0) {
        console.log(i--); 
    }
}