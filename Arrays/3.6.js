let words = ["hello", "world", "this", "is", "great"];
// console.log(...words);
// let string = "";
// for (let i = 0; i < words.length; i++) {
//   string += words[i] + " ";
// }
// console.log(string);
let string = words.reduce((x, y) => x + " " + y);
console.log(string);
