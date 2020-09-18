// Code your solutions in this file
writeCards(["Neil", "Faith", "Gordon", "Chris"]);

function writeCards(array) {
  let thanks = [];
  for (let i = 0; i < array.length; i++) {
    thanks.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
  }
  console.log(thanks);
  return thanks;
}

function countDown(n) {
  if (n > 0) {
    while (n >= 0) {
      console.log(n);
      n = n - 1;
    }
  }
}
