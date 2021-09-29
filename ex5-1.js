const readlineSync = require("readline-sync");
let tvSerie = new Object();

function askTvSerie() {
  tvSerie.name = readlineSync.question("What is your favourite TV serie? ");
  tvSerie.prodYear = readlineSync.question("Production year: ");
  let castMember = [];
  let Member = "";
  do {
    Member = readlineSync.question("Name of the castmember(s): ");
    if (Member != "") {
      castMember.push(Member);
    } else {
    }
  } while (Member != "");
  tvSerie.castMembers = castMember;
  return tvSerie;
}

console.log(askTvSerie());
