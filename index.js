// Code your solutions in this file

 function countDown(countDown) {
 
while ( countDown >= 0 ) {
  console.log(countDown--);
}
}

function writeCards(names,message){

    for(let i=0; i<names.length; i++){
        names[i] = "Thank you, " + names[i]+", for the wonderful " + message + " gift!"
    }

    return names
    
}