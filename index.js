// Code your solutions in this file


function writeCards(names,event){
    let thankYouCard=[];
    for (let i=0; i<names.length; i++){
        thankYouCard.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCard;


}



function countDown(i){
    for(let i=0;i<11;i++){
        console.log(10-i);
    }
}



