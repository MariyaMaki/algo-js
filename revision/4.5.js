let A = [];
let B = [];

function calcDistance(A, B) {
  let result = Math.sqrt((B[0] - A[0]) ** 2 + (B[1] - A[1]) ** 2);
  return parseFloat(result).toFixed(2); //methode 1

  //let result = parseFloat(Math.sqrt((B[0] - A[0]) ** 2 + (B[1] - A[1]) ** 2)).toFixed(2);
  //return result; methode 2

  //return parseFloat(Math.sqrt((B[0] - A[0]) ** 2 + (B[1] - A[1]) ** 2)).toFixed(2); methode 3
}

console.log(calcDistance([1, 1], [2, 2]));
// console.log(parseFloat(calcDistance([1, 1], [2, 2])).toFixed(2)); methode 4
