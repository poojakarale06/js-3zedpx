// Import stylesheets
import './style.css';

// Write Javascript code!
// let arr1 = [3, 6, 2, 25, 1, 9, 10, 55, 1000, 1999, 6888, 7000, 55, 89];
// let max = arr1[0];
// for (let i in arr) {
//   if (arr1[i] > max) {
//     max = arr1[i];
//   }
// }

// console.log(max);

let str = 'rohit';
let arr = [...str];
let r;

for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
    r = arr[i];
    break;
  }
}
console.log(str.indexOf(r));

// for(let i=0; i<r.length; i++){
//   console.log(r.indexOf(r[i]))
// }
