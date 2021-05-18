// Code your solutions in this file

function writeCards(array){
  let thankYouArray = []
  for (let i = 0; i < array.length; i ++){
    thankYouArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
  }
  return thankYouArray
}

function countDown(num){
  while (num >= 0){
    console.log(num)
    num --
  }
}