// Code your solutions in this file
//example
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//       console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }

function writeCards(names, events){
    let newArray = [];
    let message = "";
    for (let i = 0; i < names.length; i++) {
        message = 'Thank you, ' + names[i] + ', for the wonderful ' +  events + ' gift!';
        
        newArray.push(message);
    }

        return newArray;
    

}

function countdown(count) {
    let i = 10;
    while (i > -1) { 
        console.log(i--);


    }
}

