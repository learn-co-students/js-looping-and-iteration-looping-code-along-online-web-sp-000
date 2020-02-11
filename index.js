// Code your solutions in this file

function writeCards(Array, event){ 
    let newarray = []
    for (let count = 0; count < Array.length; count++) {newarray.push(`Thank you, ${Array[count]}, for the wonderful ${event} gift!`);
}

return newarray;

}




function countDown(integer) {

let counter = integer

while (counter >= 0) {
    console.log(counter)
    counter-=1
}

}
