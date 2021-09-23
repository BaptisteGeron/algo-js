const readlineSync = require("readline-sync");
let Number = readlineSync.question('Can you give me an integer number?');
let integerNumber = Math.trunc(Number);
let secondNumber = readlineSync.question('Can you give me a second integer number?');
let secondIntegerNumber = Math.trunc(secondNumber);
let modulus = integerNumber%secondIntegerNumber;
console.log("result of the modulus:" + modulus);
//integer are ther to be sure that the user enters integer numbers, they are not required to do the exercise