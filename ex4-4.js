const readlineSync = require("readline-sync");
let n = parseInt(readlineSync.question("Enter the number of values you want to get in the array: "));
let arr = []
let arrMax = 0;
let arrMin = 0;
let arrSum = 0;

function rand10 (min, max){
  return Math.floor(Math.random() * (max - min+1) + min);
}//generates a random number between the two given numbers (included)

function multiRand(n){
  let j = 1;
  while (j<=n) {
      arr.push(rand10(1,10));
      j++;
  }
  return arr;
} //generates an array of n random numbers between 1 and 10.

multiRand(n);
arr.forEach(item => console.log(item));
//displays the content of arr

function average (arr) {
  for (let i=0; i<arr.length; i++){
    arrSum+= parseInt(arr[i]);
  }
  return (arrSum/arr.length);
}//returns the average value of arr

console.log("Avg: " + average(arr));

function min(arr) {
  arrMin = Math.max(...arr);
  return arrMin;
} // returns the min value of arr

console.log("Min: " + min(arr));

function max(arr) {
  arrMax = Math.min(...arr);
  return arrMax;
} //returns the max value of arr

console.log("Max:" + max(arr));










/*
a.forEach((item => {
    if (item>aMax){aMax = item;}
    else if (aMin==0) { aMin = item;}
    else if (item<aMin) {aMin = item;}
}));
console.log("valeur max: " + aMax + ("\nValeur min: ") + aMin);

for (let elem of a) {
  aSum = parseInt(aSum) + parseInt(elem);
}
let  aAvg = (aSum/al);
console.log("the average value for a is "+ aAvg);

*/

/*function average(x) {
    let l=x.lenght;
    let arrSum = 0;
    x.forEach ((item => {
        arrSum = arrSum + x;
      }));
    let arravg = arrSum/l;
    return arravg;
}

console.log(average(a));*/