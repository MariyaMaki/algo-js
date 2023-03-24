// const readlineSync = require("readline-sync");

// let timeCustomers = [];

// function timeWaiting(timeCustomers, numberTill, ntill) {
//   let sum = 0;
//   let min = 0;

//   if (numberTill == 1) {
//     let sum = 0;
//     for (i = 0; i <= timeCustomers.length; i++) {
//       if (timeCustomers[i] >= 0) {
//         sum += timeCustomers[i];
//       }
//     }
//     return sum;
//   } else {
//     for (i = 0; i < timeCustomers.length; i++) {
//       /*  ntill[ntill.indexOf(Math.min(... ntill))].push(timeCustomers[i]); */
//       ntill.splice(
//         ntill.indexOf(Math.min(...ntill)),
//         1,
//         timeCustomers[i] + Math.min(...ntill)
//       );
//     }
//     console.log(Math.max(...ntill));
//     return Math.max(...ntill);
//   }
// }

// let numberCustomer = Number(
//   readlineSync.question("How many customers are there ? ")
// );

// for (let i = 0; i < numberCustomer; i++) {
//   let timeCustomersFlash = Number(
//     readlineSync.question(`Quelle est le temps du client numero ${i + 1} ? `)
//   );
//   timeCustomers.push(timeCustomersFlash);
// }

// let numberTill = Number(
//   readlineSync.question("How many free tills are there ? ")
// );

// let ntill = new Array(numberTill).fill(0);

// console.log(timeCustomers);
// console.log(
//   `All tills will be free in ${timeWaiting(
//     timeCustomers,
//     numberTill,
//     ntill
//   )} minutes`
// );
// console.log(ntill);
