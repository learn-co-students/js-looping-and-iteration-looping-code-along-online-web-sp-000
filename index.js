// Code your solutions in this file

names = (["Lisa", "Kaitlin", "Jan"]); 

function writeCards(names, event) { 

    newArray = [] 
    for (let i = 0; i < names.length; i++) {
     newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`); 

    }
        return newArray; 
    }
    
   var countDown = 10; 
   while (countDown > 0) {
       console.log(countDown);
       countDown;
   }