// Code your solutions in this file
function writeCards (arr, event_name) {
    result = []
    for (let i = 0; i < arr.length; i++ ) {
        result.push(`Thank you, ${arr[i]}, for the wonderful ${event_name} gift!`)
    }
    result
}

function countDown (i) {
    while (i >= 0) {
        console.log(i)
        i--
    }
}
