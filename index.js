function writeCards(names, event){
    let results = []
    for (let i = 0; i < names.length; i++ ) {
        results.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return results
}

function countDown(n) {
    let count = 0;
    while (count < n + 1){
        console.log(count++);
    }

}
