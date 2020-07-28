// Code your solutions in this file
function writeCards (arr, event) {
    let result = []
    for (let i = 0; i < arr.length; i++ ) {
        result.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return result
}

function countDown (i) {
    while (i >= 0) {
        console.log(i)
        i--
    }
}
