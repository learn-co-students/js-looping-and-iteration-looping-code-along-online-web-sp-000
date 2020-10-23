// Code your solutions in this file
function countDown(x){
let countup = x;
while (countup >= 0) {
  console.log(countup--);
}
}

function writeCards(x,y){
const out = [];
  for (let i = 0; i < x.length; i++) {
    out.push(`Thank you, ${x[i]}, for the wonderful ${y} gift!`);
  }
 
  return out;

}