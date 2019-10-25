// Code your solutions in this file
function writeCards(array,specialDay){
  let newArray = []
  for (let i = 0; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${specialDay} gift!`)
  }

  return newArray
}

function countDown(num){
  let i = num
  while (i > 0  || i ==0) {
    console.log(i)
    i = i - 1
  }
}
