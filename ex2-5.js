const readlineSync = require("readline-sync");
let i = readlineSync.question("What is your favorite number? ");
while (i!=42) {
     i = readlineSync.question("What is your favorite number? ");
     i;
}
