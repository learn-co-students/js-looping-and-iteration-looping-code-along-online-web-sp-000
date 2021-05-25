function writeCards(names, eventName) {
    let result = []
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    result.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
  }
     return result
}
 
WriteCards(names,eventName);

//--------------------------------------

function countDown(i) { 
    while (i > -1) {
        console.log(i--);
    }
}