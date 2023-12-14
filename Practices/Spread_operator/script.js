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

  orderPizza: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pizza with ${ing1}, ${ing2}, ${ing3}`);
  },

  unlimited: function (...damn) {
    console.log(damn);
  },
};

//Basically unpacking all the arrays into one!!

const newAddons = ["Biriyani", "Fish Fry", ...restaurant.starterMenu];
console.log(newAddons);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// const ingredients = [
//   prompt("Let's make a pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];
// // console.log(ingredients);

// restaurant.orderPizza(...ingredients);

const newRestaurant = {
    foundedIn: 1998, ...restaurant, founder: 'Guiseppe'
};
console.log(newRestaurant);

