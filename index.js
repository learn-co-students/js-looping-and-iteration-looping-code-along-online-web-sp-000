function writeCards(names, event){
    let array = []
    for(let i=0; i<names.length; i++){
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}

function countDown() {
    let i = 10;
    while (i > -1) {
        console.log(i--);
    }
}