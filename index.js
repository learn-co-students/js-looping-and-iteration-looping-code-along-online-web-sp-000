function writeCards(names, event) {
    let thanks = [];
    for (let i = 0; i < names.length; i++) {
        thanks.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    };
    return thanks;
};

function countDown(i) {
    while (i >= 0) {
        console.log(i);
        i--;
    };
};