const readlineSync = require("readline-sync");
let n = readlineSync.question("Enter a number: ");
let divisors = [];

for (i=1;i<n;i++) {
    if (n%i==0){
        divisors.push(i);
    }
    else {}
}

console.log(divisors);