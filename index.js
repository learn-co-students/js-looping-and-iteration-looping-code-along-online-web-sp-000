// Code your solutions in this file
function writeCards(arr, event) {
    let output_messages = [];

    for (let i = 0; i < arr.length; i++) {
        output_messages.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`)
    }
    return output_messages
}

function countDown(n) {
    let current_count = n;

    while (current_count >= 0) {
        console.log(current_count);
        current_count --;
    }

}