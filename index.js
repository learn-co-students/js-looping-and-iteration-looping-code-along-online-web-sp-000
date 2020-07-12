// Code your solutions in this file
function writeCards(names, event){
    let arr = []
    for (let i = 0; i < names.length; i++) {
        arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return arr
}

function countDown(times){
    for (let i = 0; i <= times; i++) {
        console.log(i)
    }
}