const readlineSync = require("readline-sync");
let age = readlineSync.question("How old are you?");
let minAge = readlineSync.question("What is the minimal age to drive a car?");
let maxAge = readlineSync.question("What is the maximal age to drive a car?");
if ((age>=minAge)&&(age<=maxAge)&&(minAge<maxAge)){
    console.log("You can drive a car")
}
else if (minAge>maxAge){
    console.log("You should read the questions again and answer carefully!")
}
else {
    console.log("You can't drive a car, you should ride a bike instead!")
}

/*correction: faire apparaître les messages qui demandent l'âge après avoir vérififé que l'entrée maxage > minage.*/