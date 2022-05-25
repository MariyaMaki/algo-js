let arr = [1, 2, 3, 4, 5];
const min = (arr) => arr.reduce((x, y) => Math.min(x, y));
const max = (arr) => arr.reduce((x, y) => Math.max(x, y));

console.log("Min:", min(arr));
console.log("Max:", max(arr));
