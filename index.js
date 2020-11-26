// Code your solutions in this file
function writeCards (arrayOfStringNames,eventName) {
    let arrayOfThankYouMessages = [];
    for (let i = 0; i < arrayOfStringNames.length; i++) {
        arrayOfThankYouMessages.push(`Thank you, ${arrayOfStringNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return arrayOfThankYouMessages
}


function countDown(positiveInteger) {
    while (positiveInteger >= 0) {
        console.log(positiveInteger);
        positiveInteger--;
    }

}