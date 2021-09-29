const readlineSync = require("readline-sync");
let n = Math.floor(Math.random*100);

function startAgain() {
    const yes= "y";
    let guess = readlineSync.question("Guess an integer number between 0 and 100: ");
    if (guess<1) {
        console.log("too low");
        startAgain();
    }
    else if (guess>100) {
        console.log("too high");
        startAgain();
    }
    else if (guess==n) {
        console.log("Well guessed");
    }
    else {
        let newTrial = readlineSync.question("No luck this time! Try again? y/n: ");
        if (newTrial=="y"){
            startAgain();
        }
        else if (newTrial=="n"){

        }
        else {
            startAgain();
        }
    }
}

startAgain();






