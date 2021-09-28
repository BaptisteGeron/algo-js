const readlineSync = require("readline-sync");
let decimalNumber = readlineSync.question('Can you give me a decimal number?');
let integerNumber = Math.trunc(decimalNumber);
let secondDecimalNumber = readlineSync.question('Can you give me a second decimal number?');
let secondIntegerNumber = parseFloat(secondDecimalNumber);
const divi = integerNumber/secondIntegerNumber;
console.log("result of the integer division:" + divi);

//on peut aussi le faire avec parseint au lieu de math.trunc
const multiply = (a,b) => {a*b}; // c'est mieux de faire comme ça.