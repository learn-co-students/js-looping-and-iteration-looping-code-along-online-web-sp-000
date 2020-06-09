// Code your solutions in this file

function writeCards(names, event){
    let messages = []
    for (let i=0; i<names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    
    }
    return messages
}

console.log(countDown(3))

function countDown(i) {
    while (i>= 0) {
        console.log(i)
        i--
    }
}