let dist = 0;

/**
 * calculates the the distance between two points A[xa,ya] and B[xb,yb]
 * @param {xa} horizontal coordinate of A
 * @param {xb} horizontal coordinate of B
 * @param {ya} vertical coordinate of A
 * @param {yb} vertical coordinate of B
 * @returns distance between the points A and B
 */

function calcDistance([xa, ya], [xb, yb]) {
  let x = xb - xa;
  let y = yb - ya;
  dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  return dist;
}

console.log("Distance between A and B: " + calcDistance([1, 2], [21, 1]));
