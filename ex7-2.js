const readlineSync = require("readline-sync");
let n = readlineSync.question("Enter the amount of number you want to get: ");
let x = 0;
let fibonacci = [];

for (i=0; i<n; i++){
    if (i==0){
        fibonacci.push(0);
    }
    else if (i==1){
        fibonacci.push(1);
    }
    else {
        fibonacci.push(fibonacci[fibonacci.length-2]+fibonacci[fibonacci.length-1]);
    }

}

console.log(fibonacci);