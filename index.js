// Code your solutions in this file
function printBadges(array) {
  let i = 0
  while (i < array.length) {
    console.log("Welcome " + array[i] + "! " + "You are employee #" + (i + 1) + ".")
    i += 1
  }
  return array
}

function tailsNeverFails() {
    let tails = 0;
    while (Math.random () >= 0.5) {
      tails++
  }
return ("You got "+ tails + " tails in a row!")
}
