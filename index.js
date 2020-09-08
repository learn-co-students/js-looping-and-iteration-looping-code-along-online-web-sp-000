// Code your solutions in this file
function writeCards(array) {
    let a = [];
    for(let i = 0; i < array.length; i++) {
        a.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);

    }
    return a;

}

function countDown(times) {
    let i = 0;
    while (i <= times) {
        console.log(i);
        i++;
    }

    return times;
}