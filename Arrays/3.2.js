// let arr = [1, 2, 3, 4, 5];
// let average = arr.reduce((a, b) => a + b, 0) / arr.length; /*le 0 est la valeur de base à partir de laquelle il commence le reduce */
// console.log(average);

let arr = [100, 101, 102];
let sum = 0;

arr.forEach((x) => {
  sum += x;
});

console.log(sum / arr.length);
