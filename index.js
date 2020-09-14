// Code your solutions in this file

function writeCards(names, event) { 

    newArray = [] 
    for (let i = 0; i < names.length; i++) {
     	newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`); 

    }
        return newArray; 
 }
    
 countDown = 10
 function countDown(countdown) { 
    while (countdown >= 0)  {
        console.log(countdown);
        countdown = countDown -1;
    }
 }