// Code your solutions in this file


function writeCards(array, event) { 
    var messages_array = [];
    for (let i = 0; i < array.length; i++) { 
    messages_array[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
    }    
    return messages_array
}
    

function countDown(integer) { 
    let i = integer; 
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

