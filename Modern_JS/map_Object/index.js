const restaurant = {
  name: "Classico Italiano",

  location: "Via Angelo Tavanti 23, Firenze, Italy",

  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],

  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],

  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orders: function (starterMenuIndex, mainMenuIndex) {
    return [
      `This was a startMenu List  ${this.categories[starterMenuIndex]} And then Thos All was a ${this.starterMenu[mainMenuIndex]}`,
    ];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//array va Map vanthu Object Aha Convert Pannum
const firstAttempt = new Map([
  ["question", "which programing lanuage you like"],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["coorect", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

//[]=> array have key and value  key was "string " value was a Object getting key and value from desrtcting array key object
//object.entries()=> object aha array key and Value a change pannuthu

const [[firstElement, { open, close }], secoundElement] = Object.entries(
  restaurant.openingHours
);
console.log(firstElement, open, close, secoundElement);
console.log(firstAttempt);

// Destructing Not Possible With Map [question ] array va object aha store panni erukku but {hello, "santhosh"} ippadi not object with key value just key and value so that destrct panmna mudiyala name illa ma
const hello = Object.entries(firstAttempt);
console.log(hello);

//Now converting to Object With Map la direct aha object potta  object is not iterable (cannot read property Symbol(Symbol.iterator) ippadi varum
//Etha Array Va convert panni podanum
const [me, you] = new Map(Object.entries(restaurant.openingHours));
console.log(me);

// Now i put directly object with map not possible to put object directly just convert object.entries the put it
// const trying_with_object = new Map(Object.entries());

//Going to Looping Firstattempt Map Variable
for (const [key, value] of firstAttempt) {
  if (typeof key === "number") {
    console.log(`im a key of ${key} , and im a value of ${value}`);
  }
}
console.log(firstAttempt.get(firstAttempt.get("coorect") === 3));

//Object aha erukura array va again object aha change pannum
console.log([...firstAttempt.keys()]);
