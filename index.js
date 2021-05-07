// function writeCards(namesArray, event) { 
//     let thankYouCards = []
//     for (let i = 0; 1 < namesArray.length; i++) {
//         thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
//     }
//     return thankYouCards
// }


// function countDown(countdown) {
//     while (countdown > 0) {
//         console.log(countdown);
//         countdown -=1;
//     }
//     console.log(countdown);
// } 
function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
  
  function countDown( countdown ) {
    while ( countdown > 0 ) {
      console.log(countdown);
      countdown--;
    }
    console.log(countdown)
  }