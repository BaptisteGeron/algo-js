const readlineSync = require("readline-sync");
let tvSerie = new Object;

function askTvSerie (){
    tvSerie.name = readlineSync.question("What is your favourite TV serie? ");
    tvSerie.prodYear = readlineSync.question("Production year: ");
    let castMember = [];
    let Member = "";
    do {Member = readlineSync.question("Name of the castmember(s): ");
    if (Member!=""){
    castMember.push(Member);}
    else {};
    }
    while (Member!="")
    tvSerie.castMembers = castMember;
    return tvSerie;
    }


function randomizeCast(a){
    let castLength = a.castMembers.length;
    
    for (castLength= castLength - 1; castLength > 0; castLength--) {
    let castRandom = Math.floor(Math.random() * (castLength+1));
    let temp = a.castMembers[castLength];
    a.castMembers[castLength] = a.castMembers[castRandom];
    a.castMembers[castRandom] = temp;
    }
    return a;
    
}
console.log(randomizeCast(askTvSerie()));