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

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

//Function declaration can be hoisted
// function addDecl(a, b) {
//   return a + b;
// }

//Function expression can be hoisted if it's created using var keyword
// var addExpr = function (a, b) {
//   return a + b;
// };

//Arrow functions can be hoisted if it's created using var keyword
// var addArrow = (a, b) => a + b;

//=====================Destructuring Arrays=========================

// const restaurant = {
//   name: 'Classico Italiano',
//   place: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       opening: 12,
//       closing: 22,
//     },
//     fri: {
//       opening: 11,
//       closing: 23,
//     },
//     sat: {
//       opening: 0, // Open 24 hours
//       closing: 24,
//     },
//   },
//   order: function (startIndex, mainIndex) {
//     return [this.categories[startIndex], this.starterMenu[mainIndex]];
//   },

//   userOrder: function({startIndexValue, mainIndexValue, address, time}){
//     console.log(`Your order of ${this.starterMenu[startIndexValue]} and ${this.mainMenu[mainIndexValue]} will be delivered to ${address} by ${time}`)
//   },

//   unlimited: function(...damn){
//     console.log(damn)
//   }
// };

//1.Getting first and second values in categories.

// const [first, second] = restaurant.categories;
// console.log(first, second);

//2.Getting first and third values in starter menu;
// const [first, ,third] = restaurant.starterMenu;
// console.log(first, third);

//3.Creating Nested Array
// const family = ['kavinesh', 'divyesh', ['manivannan', 'subashini']];
// const [i, ,[j, k]] = family;
// console.log(i, j, k);

//4.Swaping the array.
// let [first, second] = restaurant.mainMenu;
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

//5. Using order function extracts the value.
// const [startCourse, mainCourse] = restaurant.order(1,0);
// console.log(startCourse, mainCourse);

//===============Objects Destructuring===============

//1. Getting name location and openingHours
// const {name, place, openingHours} = restaurant;
// console.log(name, place, openingHours)

//2. Setting default values to objects.
// const {firstName = ['Kavinesh'], mainMenu} = restaurant;
// console.log(firstName, mainMenu);

//3. Getting open and close from saturday object
// const {sat: {opening, closing}} = restaurant.openingHours;
// console.log(opening, closing);

//4. Mutating variables.
// let a = 'kavinesh';
// let b = 'divyesh';
// const val = {a: 'santhosh', b: 'ajay'};

// ({a, b} = val);
// console.log(a, b);

//5. Using the userOrder function extracting the values.
// restaurant.userOrder({
//   startIndexValue: 2,
//   mainIndexValue: 0,
//   address: `No.2 dubai kuruku santhu, dubai main road, Dubai`,
//   time: `10:30am`
// })

//=====================Spread Operator=====================

//1. Combining starterMenu and categories
// const val = [...restaurant.starterMenu, ...restaurant.categories];
// console.log(val);

//=====================Rest Operator========================

//1. Getting unlimited function with one parameters but passing multiple arguments
// restaurant.unlimited(12, 18, 19, 19, 20, 90, 89, 100, 101, 190, 67, 90, 8888888);

//
// const arr = [...restaurant.categories, ...restaurant.starterMenu];
// const[ ,i, ...others] = arr;
// console.log(i, others);

// const name = 'santhosh';
// const [i, ...others] = name;
// console.log(i, ...others)

//======================Short Circuiting======================

//====OR OPERATOR==== - It actually short circuits when the first value is true
// console.log('==============OR OPERATOR================');

// console.log(0 || true);
// console.log('false' || undefined);
// console.log(null || 'damn she\'s gorgeous');
// console.log(0 || 0);
// console.log(true || true);
// console.log(0 || undefined || null || 'first' || true) ;

// //====AND OPERATOR==== - It actually short circuits when it encounters a falsy value
// console.log('==============AND OPERATOR================')

// console.log(0 && true);
// console.log('false' && undefined);
// console.log(null && 'damn she\'s gorgeous');
// console.log(0 && 0);
// console.log(true && true);

// let me;

// let condition = me ? me = 'divyesh' : 10
// console.log(condition);\

// // Input
// const nums = [1, 2, 3, 4];
// const fn = function sum(accum, curr) {
//   return accum + curr;
// };
// const init = 0;

// // Function to accumulate the values
// const result = nums.reduce(fn, init);

// // Output

// console.log(result);

// Input
// const nums = [1, 2, 3, 4];
// const fn = function sum(accum, curr) {
//   return accum + curr * curr;
// };
// const init = 100;

// // Function to accumulate the values
// const result = nums.reduce(fn, init);

// // Output
// console.log(result);
// const nums = [1,2,3,4];
// const reduce = function(nums, fn, init){
//     let val = init;
//     for(let i = 0; i < nums.length; i++){
//         val = fn(val, nums[i]);
//     }
//     return val;
// }
// let init = 0
// var sum = function(acum, curr){
//     return acum + curr;
// }

// console.log(reduce(nums, sum, init))

var filter = function (arr, fn) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
};

function greaterThan(n) {
  console.log(n);
  return n >= 10;
}
function firstIndex(n, i) {
  console.log(n, i);
  return i === 0;
}

function plusOne(n) {
  console.log(n);
  return n + 1;
}

console.log(filter([0, 10, 20, 30], greaterThan));
console.log(filter([1, 2, 3], firstIndex));
console.log(filter([-2, -1, 0, 1, 2], plusOne));
