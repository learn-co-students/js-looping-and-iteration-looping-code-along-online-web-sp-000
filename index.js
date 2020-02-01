// Code your solutions in this file
 

function writeCards(people, event) {
    let array = []
     for (let i = 0; i < people.length; i++) {
          array.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
    }
    return array
}

function countDown(number) {
       let i = number; 
       while (i >= 0){
        console.log(i);
        i--;
     }  
    }

    

    
