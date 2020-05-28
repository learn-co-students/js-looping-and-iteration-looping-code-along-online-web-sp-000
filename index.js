// Code your solutions in this file
function writeCards(array, event) {
    let result = [];

    //iterate over array length
    for(let i = 0; i < array.length; i++){
        //add message to result array
        result.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }

    return result;
}

function countDown(number) {
    while(number >= 0) {
        console.log(number);
        number --;
    }
}