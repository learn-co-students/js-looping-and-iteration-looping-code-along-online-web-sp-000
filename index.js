// Code your solutions in this file


function writeCards(names, occasion) {

    // const names = ["Lisa", "Kaitlin", "Jan"];
    // const occasion = ["surprise"];
    let array = [];
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
    }
    return array;
}

function countDown(number) {
    
    while (number > -1) {
    console.log(number);
    number --;
    }
}
