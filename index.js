// Code your solutions in this file
function writeCards(names, occasion) {
    const thankYou = [];
    for (let i = 0; i < names.length; i++) {
        thankYou.push("Thank you, " + names[i] + ", for the wonderful " + occasion + " gift!");
    }
  
    return thankYou;
  }

  function countdown(num)
  {
      while (num >= 0) 
      {
          console.log(num--);
      }
  }