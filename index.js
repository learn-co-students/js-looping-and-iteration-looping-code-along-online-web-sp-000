// Code your solutions in this file
function writeCards(names, event) {
  let array = []
  for (let i = 0; names.length > i; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return array
}


function countDown( n ) {
  while ( n > 0 ) {
    console.log( n );
    n -= 1;
  }
  console.log( n );
}