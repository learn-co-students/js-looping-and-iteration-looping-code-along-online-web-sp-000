// Code your solutions in this file
givers=[ 'Lisa', 'Kaitlin', 'Jan']

function writeCards( givers) {
  let greeting = []
  for ( let i = 0; i < givers.length; i++ ) {
    greeting.push( `Thank you, ${givers[i]}, for the wonderful surprise gift!`)
  } 
  return greeting
}
writCards(givers)

function countDown(){
  for (let i = 10; i>=0; i--) {
    console.log(i)
  }
}
countDown()