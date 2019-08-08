// Code your solutions in this file
function writeCards(names, word){

    let thanks = [];

    for(let i = 0; i < names.length; i++){
        thanks.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    
    return thanks;
}

function countdowm(number){
    let a = number;
    
    while(a >= 0){
        console.log(a);
        a--;
    }
    
    return number;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");