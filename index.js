function writeCards(arr, event) {
    let messageArray = [];
    for (let i = 0; i < arr.length; i++) {
        messageArray.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    } 
    return messageArray;
}

function countDown(int) {
    let i = int;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}