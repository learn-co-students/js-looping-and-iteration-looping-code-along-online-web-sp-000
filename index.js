// // Code your solutions in this file
//
// function writeCards(array, event){
//   ray = []
// for (let i = 0; i < array.length; i++){
//
//   ray.push('Thank you, ${array[i]}, for the wonderful ${event} gift!')
// }
// return ray
// }

function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

//
//
// 
// function countdown(countdown){
// // let countdown = 10
// while (countdown > 0)
// console.log(countdown--);
// }



function countdown( countdown ) {
  while ( countdown > 0 ) {

    console.log( countdown );
    countdown -= 1;
  }

  console.log( countdown );
}
