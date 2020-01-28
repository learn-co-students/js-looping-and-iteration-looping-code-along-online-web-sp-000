let names = (["Ada", "Brendan", "Ali"], "birthday")

function writeCards(names, event){
    for (let i = 0; i < names.length; i++ ) {
        console.log(`Thank you ${names()} for the birthday gift.`);
    }
}