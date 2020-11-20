// Code your solutions in this file
function writeCards(people, occasion) {
    const thankYous = [];
    for (let i = 0; i < people.length; i++) {
      thankYous.push(`Thank you, ${people[i]}, for the wonderful ${occasion} gift!`);
    }
   
    return thankYous;
  }

  function countDown(startNumber) {
      let countUp = startNumber;
      while (countUp >= 0) {
          console.log(countUp--)
      }
  }