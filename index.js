// Code your solutions in this file

let messageArray = [];

  function writeCards(namesArray, event) {
      for (let i = 0; i < namesArray.length; i++) {
          messageArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
      }
      return messageArray
  }

  function countdown(countdown) {
      while (countdown > 0) {
          console.log(countdown);
          countdown -= 1;
      }
      console.log(countdown);
  }
