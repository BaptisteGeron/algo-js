let a = [1, 2, 3, 4, 5];
let b = [101, 102, 103];
let aSum = 0;
let bSum = 0;

for (let elem of a) {
    aSum = parseInt(aSum) + parseInt(elem);
  }
  for (let elem of b) {
    bSum = parseInt(bSum) + parseInt(elem);
  }
  console.log("Addition result of a: " + aSum);
  console.log("Addition result of b: " + bSum);
