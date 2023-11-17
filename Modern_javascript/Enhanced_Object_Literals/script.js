const days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
const openingHours = {
  //The way of destructuring like this is called as Enhanced Object Literals
  [days[4]]: {
    opening: 12,
    closing: 22,
  },
  //The way of destructuring like this is called as Enhanced Object Literals
  [days[5]]: {
    opening: 11,
    closing: 23,
  },
  //The way of destructuring like this is called as Enhanced Object Literals
  [`day-${2 + 4}`]: {
    opening: 0, // Open 24 hours
    closing: 2 + 4,
  },
};
console.log(openingHours);
const restaurant = {
  name: "Classico Italiano",
  place: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  order: function (startIndex, mainIndex) {
    return [this.categories[startIndex], this.starterMenu[mainIndex]];
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


console.log(restaurant.openingHours["day-6"])