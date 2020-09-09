function countDown(number) {

    let countdown = number;
    while (countdown >= 0) {
      console.log(countdown--);
    }  
}


function writeCards(names, eventName) {

    let thankYous = []
    for (let i = 0; i < names.length; i++){
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }

    return thankYous;
}


