let a = [100, 106, 102, 103, 83, 345, 34, 28, 106];
let aMax = 0;
let aMin = 0;

a.forEach((item => {
    if (item>aMax){aMax = item;}
    else if (aMin==0) { aMin = item;}
    else if (item<aMin) {aMin = item;}
}));
console.log("valeur max: " + aMax + ("\nValeur min: ") + aMin);
