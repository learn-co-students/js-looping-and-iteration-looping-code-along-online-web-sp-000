// Code your solutions in this file
function countDown() {
    let countdown = 10;
    while (countdown >= 0) {
    console.log(countdown--);
    }
}
function writeCards(names, event) {
    let out_arr = []
    for (let i = 0; i < names.length; i++) {
        out_arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return out_arr
}