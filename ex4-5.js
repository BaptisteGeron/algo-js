let dist = 0;
/**
 * calculates the the distance between two points A and B
 * @param {xa} horizontal coordinate of A
 * @param {xb} horizontal coordinate of B
 * @param {ya} vertical coordiante of A
 * @param {yB} vertical coordiante of B
 * @returns distance between the points A and B
 */

function calcDistance([xa,ya],[xb,yb]){
    let x = xb-xa;
    let y = yb-ya;
dist=Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
return dist;
}

console.log(calcDistance([1,2],[21,1]));
