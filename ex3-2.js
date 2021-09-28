let a = [1, 2, 3, 4, 5];
let b = [100, 101, 102];

let al = a.length;
let bl = b.length;

let aSum = 0;
let bSum = 0;

for (let elem of a) {
    aSum = parseInt(aSum) + parseInt(elem);
  }
  for (let elem of b) {
    bSum = parseInt(bSum) + parseInt(elem);
  }

let  aAvg = (aSum/al);
let bAvg = (bSum/bl);

console.log("the average value for a is "+ aAvg + " \nThe average value for b is "+bAvg)