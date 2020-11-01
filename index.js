function writeCards(name, event) {

let message = []

for(let t=0; t < name.length; t++) {
    message.push(`Thank you, ${name[t]}, for the wonderful ${event} gift!`);

}
return message;
}

function countDown(n){
    while (n>-1){
        console.log(n);
        n--;
    }
}