// Code your solutions in this file

function writeCards(array, event) {
   const thankYouMessages = [];
   for (let i = 0; i < array.length; i++) {
      thankYouMessages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
   }
   return thankYouMessages;
}

function countDown(integer) {
   while (integer >= 0) {
      console.log(integer--);
   }
}