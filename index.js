// Code your solutions in this file
writeCards = (list, reason) => {
  let thankYous = []
  for (let i = 0; i < list.length; i++) {
    thankYous.push(`Thank you, ${list[i]}, for the wonderful ${reason} gift!`)
  }
  return thankYous
}

function countDown (num) {
  while (num > 0) {
    console.log(num);
    num -= 1;
  }
  console.log(num)
}

countDown(13)
