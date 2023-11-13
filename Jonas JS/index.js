'use strict';
// let massMark = 75;
// let heightMark = 197;
// let massJohn = 50;
// let heightJohn = 150;

// const bmiMark = massMark / (heightMark * heightMark);
// const bmiJohn = massJohn / (heightJohn * heightJohn);

// console.log(bmiMark);
// console.log(bmiJohn);
// console.log('hey')

// const calcAverage = (one, two, three) => {
//     let total = (one + two + three) / 3;
//     return total;
// }

// let scoreDolphins =  calcAverage(96, 23, 71);
// console.log(Math.floor(scoreDolphins))
// let scoreKoalas = calcAverage(45, 65, 10);
// console.log(Math.floor(scoreKoalas));

// function checkWinner(avgDolphin, avgKoalas){
//   if(avgDolphin >=  avgKoalas){
//     console.log(`Dolphins won with the points of ${Math.floor(avgDolphin)}`)
//   } else if(avgKoalas >=  avgDolphin){
//     console.log(`Koalas won with the points of ${Math.floor(avgKoalas)}`)
//   } else {
//     console.log("No team won :)(")
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// console.log(x)
// console.log(name())
// console.log(num)
// var x = 'kavinesh';
// console.log(x)

// function name(){
//   console.log('im kavinesh')
// }

// const num = function(){
//     console.log('Hey')
// }

// var name = () => {
//   console.log('Im kavinesh');
// }

// try{
//   let num = prompt("Enter a number")
//   if(isNaN(num))
//   throw "Enter a valid Number"
//   console.log(num**2)
//   }
//   catch(error){
//   console.log(error)
//   }

// const calcAge = function (birthYear){
//     console.log(2023 - birthYear);
//     console.log(this)
// }

// calcAge(2004)

// const calcArrow = birthYear => {
//     console.log(2023 - birthYear);
//     console.log(this)
// }

// calcArrow(2004)

// var firstName = 'Kavinesh';

// const something = {
//   firstName: 'Dev',
//   year: 2004,

//   calcAge: function () {
//     console.log(2023 - this.year);
//     // console.log(this.firstName);

//     const isTeen = () => {
//       if (2023 - this.year >= 18) {
//         console.log('This mf is a teen');
//       }
//     };

//     isTeen();
//   },

//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//     console.log(this);
//   },
// };

// something.calcAge();
// something.greet();

// const add = function(a,b){
//   console.log(arguments)
//   // return a + b;
// }

// var map = function(arr, fn) {
//   return fn(arr);
// }

// function plusOne(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + 1;
//   }
//   return arr;
// }

// var map = function (arr, fn) {
//   var result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(fn(arr[i], i));
//   }
//   return result;
// };

// var plusOne = function (n) {
//   return n + 1;
// };

// var plusI = function (n, i) {
//   return n + i;
// };

// var constant = function (n) {
//   return (n = 42);
// };

// var santhosh = function (n) {
//   return (n = 'santhosh');
// };

// console.log(map([1, 2, 3], plusOne));
// console.log(map([1, 2, 3], plusI));
// console.log(map([1, 2, 3], constant));
// console.log(map([1, 2, 3], santhosh));

//Primitive types
// let age = 19;
// let oldAge = age;
// age = 20;
// console.log(age);
// console.log(oldAge);

//Reference types
// const me = {
//   name: 'Jonas',
//   age: 30
// }

//Object.assing() -> use to copy the object
//Copying objects
// const friend = Object.assign({}, me);
// friend.age = 27;

//console.log('Friend: ', friend);
// {name: 'Jonas', age:27;
//console.log('Me: ', me);
// {name: 'Jonas', age: 27

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

//Function declaration can be hoisted
function addDecl(a, b) {
  return a + b;
}

//Function expression can be hoisted if it's created using var keyword
var addExpr = function (a, b) {
  return a + b;
};

//Arrow functions can be hoisted if it's created using var keyword
var addArrow = (a, b) => a + b;
