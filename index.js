// Code your solutions in this file
function writeCards(givers, reason) {
    let resultz = [];
    for (let i = 0; i < givers.length; i++) {
        resultz.push( `Thank you, ${givers[i]}, for the wonderful ${reason} gift!` );
    } 
    return resultz;
}

function countDown( number ) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}
