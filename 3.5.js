let array = [1, -4, 7, 12];
let sum = 0;

for (i = 0; i <= array.length; i++) {
  if (array[i] >= 0) {
    sum += array[i];
  }
}
console.log(sum);
