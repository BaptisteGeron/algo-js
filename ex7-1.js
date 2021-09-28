const readlineSync = require("readline-sync");
let n = Math.floor(Math.random*100);

function startAgain {
    let guess = readlineSync.question("Guess an integer number between 0 and 100: ");
    if (guess<1) {
        console.log("too low");
    }
    




/*function askAgain(guess) {
    if (guess<1) {
        console.log("too low");
        guess = readlineSync.question("Guess an integer number between 0 and 100: ");
    }
    else if (guess>100) {
        console.log("too high")
        guess = readlineSync.question("Guess an integer number between 0 and 100: ");
        askAgain(guess);
    }
    else if (guess==n) {
        console.log("Well guessed");
    }
    else {
        guess = readlineSync.question("Guess again? y/n");
        if (guess= y) {
            guess = readlineSync.question("Guess an integer number between 0 and 100: ");
        askAgain(guess);
        }
        else {
        
        }
    }
}

askAgain(chosenNumber);*/



