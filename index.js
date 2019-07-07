// Code your solutions in this file
function writeCards(arr) {
  for(let i in arr){
    arr[i] = `Thank you, ${arr[i]}, for the wonderful surprise gift!`;
  }
  return arr;
}

function countdown(num) {
  for(let i = num; i>=0; i--) {
    console.log(i);
  }
}
