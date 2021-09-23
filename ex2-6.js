const readlineSync = require("readline-sync");
let i = readlineSync.question("Enter en number from 1 to 7: ");

switch (i) {
    case "1": console.log("Monday");
    break;
    case "2": console.log("tuesday");
    break;
    case "3": console.log("Wednesday");
    break;
    case "4": console.log("Thuersday");
    break;
    case "5": console.log("Friday");
    break;
    case "6": console.log("Saturday");
    break;
    case "7": console.log("Sunday");
    break;
    default: console.log("you did not enter a correct value");
    break;
}