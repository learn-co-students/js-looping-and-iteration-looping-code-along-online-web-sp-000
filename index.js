// Code your solutions in this file

//function writeCards(names, event) { 
  //  newArray = [] 
   // for (let i = 0; i < names.length; i++) {
     //	newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`); 
 //   }
        //return newArray; 
// }
    
 //countDown = 10
 //function countDown(countdown) { 
   // while (countdown >= 0)  {
      //  console.log(countdown);
       // countdown = countDown -1;
   // }
// }


 function writeCards(Array, event){ 
    let newarray = []
    for (let count = 0; count < Array.length; count++) {newarray.push(`Thank you, ${Array[count]}, for the wonderful ${event} gift!`);
}

return newarray;

}




function countDown(integer) {

let counter = integer

while (counter >= 0) {
    console.log(counter)
    counter-=1
}

}