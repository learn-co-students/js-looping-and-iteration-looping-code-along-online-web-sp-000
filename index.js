// Code your solutions in this file
function writeCards(array, event) {
   let outputArr = [];

   for (let i = 0; i < array.length; i++) {
      outputArr.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
      console.log(outputArr)
   }
   return outputArr
}

function countDown(number) {
   let countdownNumber = number

   while (countdownNumber >= 0) {
      console.log(countdownNumber)
      countdownNumber--
   }
}
