const array = [ 'Lisa', 'Kaitlin', 'Jan' ]
function writeCards(array) {
  let thankUCards = []
  for (let i = 0; i < array.length; i++) {
    thankUCards.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
  }
  return thankUCards
};

function countdown( countdown ) {
  while ( countdown > 0 ) {
    console.log( countdown );
    countdown -= 1;
  }
  console.log( countdown );
};
