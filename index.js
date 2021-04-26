// Code your solutions in this file
function writeCards(namesArray, eventName) {
   let results = [];
   for (let i = 0; i < namesArray.length; i++) {
      results.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
   }
   return results;
}

function countDown(postiveInteger) {
   while (postiveInteger > 0) {
      console.log(postiveInteger);
      postiveInteger -= 1;
   }
   console.log(postiveInteger)
}