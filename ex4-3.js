const readlineSync = require("readline-sync");
let n = readlineSync.question("Enter the number of values you want to get in the array: ");
let a = new Array

function rand10 (min, max){
    return Math.floor(Math.random() * (max - min+1) + min);
 }//generates a random number between the two given numbers (included)

function multiRand(x){
    let i = 1;
    while (i<=x) {
        a.push(rand10(1,10));
        i++;
    }
    return a;
}

multiRand(n);
a.forEach(item => console.log(item));

