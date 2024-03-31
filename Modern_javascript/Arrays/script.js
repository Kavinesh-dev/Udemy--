//SIMPLE ARRAY METHODS
const arr = ["Kavinesh", "Santhosh", "Divyesh", "Saamy", "Google", "Free4Talk"];

//SLICE - Immutable
// console.log(arr.slice(-2))

//SPLICE - Mutable
// console.log(arr.splice(-2));
// console.log(arr);

//REVERSE - Mutable
// console.log(arr.reverse())
// console.log(arr);

//JOIN - Immutable
// console.log(arr.join(', '));

//CONCAT - Immutable
// const something = ["Avan", "Ivan", "Evan"];
// console.log(arr.concat(something));

// //POP
// //  arr = ["Kavinesh", "Santhosh", "Divyesh", "Saamy", "Google", "Free4Talk"];
// console.log(arr.pop());
// console.log(arr);

// //THE NEW AT METHOD
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// //At method
// console.log(arr.at(-1));

// //forEach METHOD
// const val = [234, -435, 89, 788, -90, 494, -434, -4849];

// for (const [i, arr] of val.entries()) {
//   if (arr > 0) {
//     console.log(`Order ${i + 1}: Current amount is ${arr}`);
//   } else {
//     console.log(`Order ${i + 1}: Current amount is ${Math.abs(arr)}`);
//   }
// }

// console.log("---- FOREACH ----");

// val.forEach(function (amount, i, arr) {
//   if (amount > 0) {
//     console.log(
//       `Order ${i + 1}: Current amount is ${amount}: ${JSON.stringify(arr)}`
//     );
//   } else {
//     console.log(`Order ${i + 1}: Current amount is ${Math.abs(amount)}`);
//   }
// });

// //forEach for Maps and Sets:

// //Maps
// const value = new Map([
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
//   [5, 6],
// ]);
// console.log(value);

// value.forEach(function (value, key, map) {
//   console.log(key, value, map);
// });

//Set
// const any = new Set([
//   "kavinesh",
//   "divyesh",
//   "santhosh",
//   "santhosh",
//   "kavinesh",
//   "saamy",
// ]);
// console.log(any);

// any.forEach(function (str, str2, str3) {
//   console.log(str, str2);
// });

// //Data transformation: Map, Filter, Reduce!
// //forEach
// // forEach: It doesn't change the original array Its have Side Effect
// const storing1 = [10, 20, 15, 27];
// storing1.forEach((hell) => {
//   console.log(hell * 2);
// });

// // It doesn't change the original array; it returns a new array with the modified elements Pure Function
// const valIt = storing1.map((hell) => {
//   console.log(hell * 2);
// });

// // Using With Map Method Here

// const mobile_Phones = [
//   { name: "OPPO", price: 15000 },
//   { name: "VIVO", price: 17000 },
//   { name: "MOTO", price: 2000 },
//   { name: "NOKIA", price: 1100 },
//   { name: "APPLE", price: 100000 },
// ];

// map Method
// const storing = mobile_Phones.map((items) => {
//   return items;
// });

// So Its Return Array
// console.log(storing);

// forEach Method cant return anything its only perform
// const recived = mobile_Phones.forEach((item) => {
//   return item.price;
// });

//Methods returning new array
//Map 
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
// doubled is a new array: [2, 4, 6, 8]
console.log(doubled);

//filter
const numbers1 = [1, 2, 3, 4];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
// evenNumbers is a new array: [2, 4]
console.log(evenNumbers);

//slice
const fruits = ['apple', 'banana', 'orange', 'grape'];
const slicedFruits = fruits.slice(1, 3);
// slicedFruits is a new array: ['banana', 'orange']
console.log(slicedFruits);

//concat
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArray = arr1.concat(arr2);
// combinedArray is a new array: [1, 2, 3, 4]
console.log(combinedArray);

//flat
const nestedArray = [1, [2, 3], [4, 5]];
const flatArray = nestedArray.flat();
// flatArray is a new array: [1, 2, 3, 4, 5]
console.log(flatArray);

//flatMap
const numbers3 = [1, 2, 3];
const doubledAndFlattened = numbers3.flatMap(num => [num * 2, num * 3]);
// doubledAndFlattened is a new array: [2, 3, 4, 6, 6, 9]
console.log(doubledAndFlattened);

const numbers4 = [1, 2, 3, 4];
numbers4.reverse();
console.log(numbers);
// reversedArray is a new array: [4, 3, 2, 1], and numbers is modified to [4, 3, 2, 1]
