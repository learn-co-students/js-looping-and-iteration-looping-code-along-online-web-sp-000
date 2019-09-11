// Code your solutions in this file
function writeCards( nameArray, description )
{
  let thankYouCards = [];

  for ( let counter = 0; counter < nameArray.length; counter++ )
  {
    thankYouCards.push( `Thank you, ${nameArray[counter]}, for the wonderful ${description} gift!` );
  }

  return(thankYouCards);
}

function countdown( number )
{
  while ( number > 0 )
  {
    console.log( number );
    number -= 1;
  }
  console.log( number );
}
