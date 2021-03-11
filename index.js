// Code your solutions in this file
 
function writeCards(names) {
  let recipients = [];
  for (let i = 0; i < names.length; i++) {
    recipients.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return recipients;
}
 
writeCards(recipients);

function countDown(num) {
  while (num > 0) {
    console.log(num--);
  }
  console.log(num);
}