const restaurant = {
  name: "Classico Italiano",
  place: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      opening: 12,
      closing: 22,
    },
    fri: {
      opening: 11,
      closing: 23,
    },
    sat: {
      opening: 0, // Open 24 hours
      closing: 24,
    },
  },
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  userOrder: function ({ startIndexValue, mainIndexValue, address, time }) {
    console.log(
      `Your order of ${this.starterMenu[startIndexValue]} and ${this.mainMenu[mainIndexValue]} will be delivered to ${address} by ${time}`
    );
  },

  unlimited: function (...damn) {
    console.log(damn);
  },
};

restaurant.userOrder({
  startIndexValue: 1,
  mainIndexValue:0,
  address: 'Mylapore, Nochikuppam chennai - 4',
  time: "9:00am"
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Assinging new variable names!
const { name: resName, openingHours: hours, categories: dishes } = restaurant;
console.log(resName, hours, dishes);

//Default values
const { workers = [], starterMenu: starters = [] } = restaurant;
console.log(workers, starters);

//Mutating variables;
let a = 8
let b = 90
let obj = {a: 2, b: 9, c: 9};
({a,b} = obj);
console.log(a,b)