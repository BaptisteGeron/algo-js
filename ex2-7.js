const readlineSync = require("readline-sync");
let n = readlineSync.question("Enter en number ");
let i = 1;
let y = 0;
while (i<=n){
    let x = readlineSync.question("Enter en number ");
    y = parseInt(y)+ parseInt(x);
    i++;
}
console.log("the result is " + y);