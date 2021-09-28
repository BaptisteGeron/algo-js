function rand10 (min, max){
   return Math.floor(Math.random() * (max - min+1) + min);
}//generates a random number between the two given numbers (included)

let min = 1;
let max = 10;
console.log(rand10(min, max));