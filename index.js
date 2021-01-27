// Code your solutions in this file
let result = [];

function writeCards(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        result.push(`Thank you, ${arr[i]}, for the wonderful ${str} gift!`);
    }

    return result;
};

function countDown(num){
    while (num >= 0) {
        console.log(num--);
    }
}
