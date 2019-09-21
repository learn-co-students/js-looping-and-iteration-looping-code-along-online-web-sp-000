// Code your solutions in this file
function writeCards(array, event) {
    let tyArray = []
        for (let i=0; i < array.length; i++){
            tyArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);

        }
    return tyArray
    }

    function countdown(num){
        let i=num;
        while (0 <= i) {
            console.log(i);
            i--;
        }
    }
