let array = [1, -4, 7, 12];
let sum = 0;

// for (i = 0; i <= array.length; i++) {
//   if (array[i] >= 0) {
//     sum += array[i];
//   }
// }
// console.log(sum);

sum = array.reduce((x, y) => {
  if (y >= 0) {
    x = x + y; /*ou x+=y; */
  }
  return x;
});
console.log(sum);

// console.log(
//   array.reduce((x, y) => {
//     if (y >= 0) x += y;
//     return x;
//   })
// );
