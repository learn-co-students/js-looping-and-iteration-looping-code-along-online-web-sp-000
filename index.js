// Code your solutions in this file
function writeCards(nameArray, eventName) {
    let result = []
    for ( let i = 0; i < nameArray.length; i++) {
        let msg = `Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`
    result.push(msg);
    }
    return result;
};

//testcode:
// writeCards(["ana","betty","caitlyn"],"batz mitzvah");
//  ["Thank you, ana, for the wonderful batz mitzvah gift!", "Thank you, betty, for the wonderful batz mitzvah gift!", "Thank you, caitlyn, for the wonderful batz mitzvah gift!"]

function countDown(startingAt) {
    let i = startingAt; //initialize
    while ( i >= 0) {
        console.log(i);
        i--;
    }
}




function checkForMoreSeeds() {
    return false;
}

function plantGardenWhileLoop() {
    let keepWorking = true;
    while (keepWorking) {
        console.log("planting seeds")
      keepWorking = checkForMoreSeeds();
    }
    return "done"
  };


  function plantGardenForLoop() {
    for (     let keepWorking = true; keepWorking == true; keepWorking = checkForMoreSeeds() ) {
        
        console.log("planting seeds")
    }
    return "done"
  };

let x = 3;

  function countToTen(startingAt) {
    for ( let i = startingAt; i < 11 ; i++) {
        console.log(i)
  }
  return "done";
};