// Code your solutions in this file
function writeCards(names, occasion){
    let returnArray = [];
    for (let i = 0; i < names.length; i++){
        returnArray.push("Thank you, " + names[i] + ", for the wonderful " + occasion + " gift!");
    }
    return returnArray;
}

function countDown(startingNumber){
    let i = startingNumber;
    while (i >= 0){
        console.log(i);
        i--;
    }
}