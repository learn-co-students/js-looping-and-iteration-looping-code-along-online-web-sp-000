// Code your solutions in this file

names = (["Lisa", "Kaitlin", "Jan"]); 

function writeCards(names, event) { 

    newArray = [] 
    for (let i = 0; i < names.length; i++) {
     newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`); 

    }
        return newArray; 
    }
    
    let countDown = function f(fromNumber) {
        console.log(fromNumber);
    
        let nextNumber = fromNumber - 1;
    
        if (nextNumber > 0) {
            f(nextNumber);
        }
    }
    
    let newYearCountDown = countDown;
    countDown = null;
    newYearCountDown(10);