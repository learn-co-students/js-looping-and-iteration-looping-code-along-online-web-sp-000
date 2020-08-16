// Code your solutions in this file

function writeCards(namesArray, event) { 
  let cards = []
  for (let i = 0; i < namesArray.length; i++) { 
    cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
  } 
  
  return cards; 
} 


function countDown( countdown ) {
  while ( countdown > 0 ) {
    console.log( countdown );
    countdown -= 1;
  }
  console.log( countdown );
}

teamNames = ['Bengals', 'Browns', 'Ravens']

function listTeams(teamNames) {
let teams = []
for (let i = 0; i < teamNames.length; i++) { 
  teams.push(`${teamNames[i]}, has a game against the steelers this sunday`); 
  }
 return teams;
}