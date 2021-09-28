let a = [100, 101, 102, 103];
let b = new Array;
let c = a.length;
let i = 0;
console.log("Contenu de a");

a.forEach((item => {console.log(item);}));

a.forEach((item => {b.push(item);}));

console.log("contenu de b");

b.forEach((item => {console.log(item);}));