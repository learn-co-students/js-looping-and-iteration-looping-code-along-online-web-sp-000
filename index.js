// Code your solutions in this file


const names = ["Ada", "Brendan", "Ali"];
const events = ["birthday"];
function writeCards(names,events){
 let greeting = []
  for (let i = 0; i < names.length; i++){
     greeting.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }
  return greeting;
}

function countdown(num){
  while (num >= 0){
    console.log(num--);
      }

}
