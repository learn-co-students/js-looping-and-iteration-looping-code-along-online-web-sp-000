// Code your solutions in this file
const countDown = i => {
  for (i; i >= 0; i--) {
    console.log(i)
  }
}

const writeCards = (names, type) => {
  const arr = []
  for (let i = 0; i < names.length; i++) {
    arr.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`)
  }
  return arr
}
