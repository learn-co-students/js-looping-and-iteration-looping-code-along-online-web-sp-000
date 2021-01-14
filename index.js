// Code your solutions in this file
function countDown(x){
    let i = x;
    while ( i >= 0){
        console.log(i--);
    }
}

function writeCards(ary, word){
    let newAry = []
    for(let x = 0; x < ary.length; x++){
        newAry.push(`Thank you, ${ary[x]}, for the wonderful ${word} gift!`);
    }
    return newAry;
}