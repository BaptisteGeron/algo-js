const readlineSync = require("readline-sync");

function calcSurface(length, width) { 
    return length*width;
} /*This function calculates the area of a rectangle */
let lenght = readlineSync.question("Enter the lenght: ");
let width = readlineSync.question("Enter the width: ");
console.log("the area is " + calcSurface(lenght, width));