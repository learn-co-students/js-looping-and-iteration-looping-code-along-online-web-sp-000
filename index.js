// Code your solutions in this file

function writeCards(people, occasion) {
    const thankYous = []
    for (let i = 0; i < people.length; i++) {
        thankYous.push(`Thank you, ${people[i]}, for the wonderful ${occasion} gift!`);
    }
 
  return thankYous;
}

function countdown(integer){
    while (integer >=0 ){
        console.log(integer)
        integer --
    }
}
//  "Thank you, Ali, for the wonderful birthday gift."