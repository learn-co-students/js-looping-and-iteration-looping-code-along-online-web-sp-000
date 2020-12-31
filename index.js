// Code your solutions in this file
function writeCards(array, event){
  let arr = []
  for(let i = 0; i < array.length; i++){
    arr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  };
  return arr
};

function countDown(number){
 while(number >= 0){
   console.log(number);
   number--
 } ; 
}