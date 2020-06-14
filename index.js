// Code your solutions in this file
  function writeCards(namesArray, eventName) {
      let cards = [];
      for (let i = 0; i < namesArray.length; i++) {
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
      }
    return cards;
  }

  function countDown(number) {
    let new_number = number
    while (new_number > -1) {
        console.log(new_number)
        new_number = new_number - 1
    }
  }
    

