// Code your solutions in this file
function writeCards(arr, str) {
    let i = 0;
    let newArr = [];
    while (i < arr.length) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${str} gift!`);
        i = i + 1;
    }
    return newArr;
}

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i);
        i = i - 1;
    }
}