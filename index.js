// const gifts = ["teddy bear", "drone", "doll"];
 
// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
 
//   return gifts;
// }

function writeCards(names, occassion) {
    let result = [];
    
    for (let i = 0; i  < names.length; i++) {
        result.push(`Thank you, ${names[i]}, for the wonderful ${occassion} gift!`);
    };

    return result;
}

function countDown(someNumber) {
    while (someNumber >= 0) {
        console.log(someNumber--);
    };
};

// const names = ["a", "b"], occassion = "birthday";
// console.log(writeCards(names, occassion));