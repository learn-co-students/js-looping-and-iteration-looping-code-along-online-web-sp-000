// Code your solutions in this file

function writeCards(namesArray, event) {
    //thankYouCards is an empty array
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        //you are pushing the message into the let variable thankYouCards. push is adding items to the end of the array
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countDown(number) {
    
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);

}