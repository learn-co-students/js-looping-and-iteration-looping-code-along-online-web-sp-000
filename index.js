function writeCards(array, occasion) {
    const nameArray = array
    let msg1 = "Thank you, ";
    let msg2 = ", for the wonderful " + occasion + " gift!";
    let r_array = [];
    for (let i = 0; i < nameArray.length; i++){
        let msg3 = nameArray[i];
        let full_msg = msg1 + msg3 + msg2;
        r_array.push(full_msg);
    }
    return r_array
}

function countDown(num){
    let i = num;
    while (i >= 0){
        console.log(i);
        i = i - 1;
    }
}

countDown(8)