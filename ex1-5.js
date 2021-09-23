const readlineSync = require("readline-sync");
let decimalNumber = readlineSync.question('Can you give me a decimal number?');
let integerNumber = Math.trunc(decimalNumber);
let secondDecimalNumber = readlineSync.question('Can you give me a second decimal number?');
let secondIntegerNumber = Math.trunc(secondDecimalNumber);
let divi = integerNumber/secondIntegerNumber;
console.log("result of the integer division:" + divi);