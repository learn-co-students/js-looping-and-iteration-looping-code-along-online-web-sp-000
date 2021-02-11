// Code your solutions in this file
function writeCards(names, surprise){
return names.map(name =>  `Thank you, ${name}, for the wonderful ${surprise} gift!`)
}




writeCards(["Ada", "Brendan", "Ali"], "birthday")




function countDown(countup) {
    while (countup >= 0) {
      console.log(countup--);
    }
  }

  countDown(10)
