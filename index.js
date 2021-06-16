function writeCards(names) {
    let i = 0;
    const namesArray = [];
    while ( i < names.length) {
        namesArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        i++
    }
    return namesArray;
}

function countDown(){
    let i = 0;
    while (i < 11){
        console.log(i);
        i++
    } 
}