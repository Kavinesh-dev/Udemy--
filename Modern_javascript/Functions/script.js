//Default parameter - setting default values to the parameters
const defaultValue = (name, age = 18) => console.log(name, age);
// defaultValue("kavinesh");

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passport === 24739479284) {
    // alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

checkIn(flight, jonas);
// console.log(jonas);

//Call by Primitive type
let name = "kavinesh"; //Address: 0001
let another_name = name; //Address: 0001;
// console.log(name);
// console.log(another_name);

//New address is changed in the call stack
name = "Santhosh"; //Address: 0002 (Value santhosh)
// console.log(name);

//Call by Reference type!
//It creates a new address and stores the values in the heap memory!
const Name = {
  name: "Kavinesh",
  age: 20,
};
//Copying the value but it holds the same address!
const new_Name = Name; //Creating new variable and pointing it to the same address as Name address!
new_Name.age = 21; //Changing the value it reflects in both Name and new_Name because they both have same address!
// console.log(new_Name);

//FIRST-CLASS FUNCTIONS
//Javascript treats functions as first-class citizens
//This means that functions are simply values
//Functions are just another "type" of object
//Functions are really just another type of objects in JS.
// Store functions in variables or properties:
// Pass functions as arguments to OTHER functions:
// Return functions FROM functions!

//HIGHER-ORDER FUNCTIONS!
// A function that receives another function as an!
// argument, that returns a new function, or both!
// This is only possible because of first-class functions!

//Functions Accepting callback functions
// const upperCase = function (str) {
//   const [first, ...others] = str.split("");
//   return [first[0].toUpperCase(), ...others].join("");
// };

// const lowerCase = function (str) {
//   const [first, ...others] = str.split("");
//   return [first[0].toLowerCase(), ...others].join("");
// };

// const transform = function (str, fn) {
//   // console.log(`Transform: ${fn(str)}`);
// };

// transform("kavinesh is the best developer ever exist!", upperCase);
// transform("Kavinesh is the best developer ever exist!", lowerCase);

//Functions returning Functions
//Simply its a way of returning a function from inside a function!
//Like this!!!

//Using function expression
// const greet = function (greeting) {
//   return function (name) {
//     // console.log(`${greeting} ${name}`);
//   };
// };

// const val = greet("Hey");
// val("Kavinesh");

//Using Arrow function:
// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
// const valArr = greetArr("Hey");
// valArr("Kavinesh");

//THE CALL AND APPLY METHODS

//this keyword works based on how the function gets called.
//If the function is called as a regular function the this keyword points to undefined.
//If the function is called as a method the this keyword points to the current object.

//How to tell javascript to use explicitly or manually what this keyword should be like!
//Three function method to do that [call, apply, and bind].

// const sarBha = {
//   hotel: "Saravana Bhavan",
//   hotelCode: "SR",
//   orders: [],

//   book(tokenNum, dish, name) {
//     console.log(
//       `${name} ordered a ${dish} in ${this.hotel} Hotel, with the token number of ${this.hotelCode}${tokenNum}`
//     );
//     this.orders.push({ restaurant: `${this.hotelCode}${tokenNum}`, name });
//   },
// };
// const book = sarBha.book;

// const marHot = {
//   hotel: "Marina Park",
//   hotelCode: "MR",
//   orders: [],
// };

// const palShor = {
//   hotel: "PalmShore",
//   hotelCode: "PS",
//   orders: [],
// };

// sarBha.book(943, "biriyani", "kavinesh");
// console.log(sarBha);

//Using call method:
// book.call(marHot, 34, "Pizza", "kavinesh");
// console.log(marHot);

// book.call(palShor, 543, "Mandhi", "Santhosh");
// console.log(palShor);

//Using apply method
// const addedVal = [534, "Veg starters", "Santhosh"];
// book.apply(marHot, addedVal);

// book.call(palShor, ...addedVal);

/*Using Bind method
 The bind() method in JavaScript creates a new
function with a specific value for this (the 
context in which the function is invoked) and optionally pre-set initial arguments. 
It's like making a copy of a function with a fixed context and 
some predefined values.**/

//The following is using a bind method to create a seperate function . That will create a seperate this for every function that has been created using bind method
// const sarBhaBind = book.bind(sarBha);
// const marHotBind = book.bind(marHot);
// const palShorBind = book.bind(palShor);
// palShorBind(234, 'Biriyani', "Santhosh")
// sarBhaBind(234, 'Pizza', 'Kavinesh')

//Using Event Listener!

// sarBha.orderedItems = 2;
// sarBha.orderFood = function () {
//   console.log(this);
//   this.orderedItems++;
//   console.log(this.orderedItems);
// };

// document
//   .querySelector(".btn")
//   .addEventListener("click", sarBha.orderFood.bind(sarBha));

//Partial application = Setting a preset arguments to function parameters.
// const palShorBind23 = book.bind(palShor, 2353, "Pizza");
// palShorBind23("Kavinesh");

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 100));

//Defining preset arguments in the function parameter!
//The place null were defined is the place this(object) must be passed in. In this case there is no object or this needed that's the reason null is defined !
// const addVat = addTax.bind(null, 0.3);
// console.log(addVat(200));

//Same method but using function returning function method!
// const addTax2 = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const anotherFun = addTax(0.3);
// console.log(anotherFun(200));

//Challenge!
/**
 1. Create a method called 'registerNewAnswer on the
'poll' object. The method does 2 things:
1.1. Display a prompt window for the user to input
the number of the selected option. The prompt
should look like this:
What is your favourite programming language?
0:JavaScript
1: Python
2: Rust
3: C++
(Write option number)!

1.2. Based on the input number, update the answers
array. For example, if the option is 3, increase
the value AT POSITION 3 of the array by 1. Make
sure to check if the input is a number and if the
number makes sense (e.g answer 52 wouldn't make
sense, right?)

2. Call this method whenever the user clicks the
"Answer poll" button.

3. Create a method 'displayResults' which displays
the poll results. The method takes a string as an
input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the
results array as it is, using console.log(). This
should be the default option. If type is 'string',
display a string like "Poll results are 13, 2, 1, 1".

4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this
and the last section

BONUS: Use the 'displayResults' method to display the
2 arrays in the test data. Use both the 'array' and
the 'string' option. Do NOT put the arrays in the
poll object! So what shoud the this keyword look like
in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3,]
 */
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section
  answers: new Array(4).fill(0), //[0,1,2,3]

  registerNewAnswer: function () {
    const result = Number(
      prompt(`${this.question}\n${this.options.join("\n")}`)
    );
    typeof result === "number" && result < this.answers.length
      ? this.answers[result]++
      : console.log("Hey there");

    this.displayResults();
    this.displayResults("kavinesh");
  },

  displayResults: function (type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (typeof type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};
document
  .querySelector(".btn")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
poll.registerNewAnswer;

//IMMEDIATELY INVOKED FUNCTION EXPRESSIION - Using a function once

// (function () {
//   console.log("Na marubdiyum work aaga maatan");
//   var x = 29;
// })();

//Arrow function
// (() => console.log("Nanum again run aga maatan nanba"))();

//=========CLOSURES=========
//Closures makes a function remember all the variables that existed at the function's birthplace(by the time it was created )
//Secret of closure: Any function always has access to the variable environment of the execution context in which the function was created.
//A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone;
//✔A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The
//function keeps a reference to its outer scope, which preserves the scope chain throughout time.
//A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place;

// const sayHello = function () {
//   let hello = 0;

//   return function () {
//     hello++;
//     console.log(`Hello: ${hello} 👋`);
//   };
// };

// const any = sayHello();
// any();
// any();
// any();

// //Example 1:

// let v;

// const y = function () {
//   const z = "Kavinesh";
//   v = function () {
//     console.log(`Hey there ${z}`);
//   };
// };

// y();
// v();
// console.dir(v);

//Re-assigning v function
// const a = function () {
//   const b = "Santhosh";
//   v = function () {
//     console.log(`Again hey there ${b}`);
//   };
// };

// a();
// v();
// console.dir(v);

//Example 2:

// const ride = function (n, time) {
//   const perRide = n / 3;

//   setTimeout(function () {
//     console.log(`We'll start the ride with ${n} peoples`);
//     console.log(
//       `There are 3 ride compartments with ${Math.floor(perRide)} passengers`
//     );
//   }, time * 1000);

//   console.log(`Ride is gonna start in ${time}`);
// };

// ride(180, 3);

// console.dir();

