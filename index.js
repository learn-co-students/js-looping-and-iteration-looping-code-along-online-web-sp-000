// Code your solutions in this file
let thanks = []
function writeCards(names, event) {
  for (let i=0; i < names.length; i++) {
    thanks.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return thanks
}

function countDown(num) {
  let i = num
  while (num >= 0) {
    console.log(num)
    num -= 1
  }
}
