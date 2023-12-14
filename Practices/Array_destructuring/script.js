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

console.log("ARRAY DESTRUCTURING");

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
// let another = main;
// main = secondary;
// secondary = another;
// console.log(main, secondary);

// Another version (easiest);
[main, secondary] = [secondary, main]
console.log(main, secondary)

//Receive values from a function
console.log(restaurant.order(1,2));

//Nested destructuring
const nested = [1,2,[3,4]];
const[i, ,j] = nested;
const[k, ,[l, m]] = nested;
console.log(i, l, m)