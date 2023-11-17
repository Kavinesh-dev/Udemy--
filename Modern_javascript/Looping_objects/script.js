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
const { openingHours } = restaurant;

//Looping over objects
const property = Object.keys(openingHours);
console.log(property);

let openStr = `We open our restaurant ${property.length} days a week:`;

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// for (const day of Object.values(openingHours)) {
//   console.log(day);
// }

//Property NAMES
for(const day of property){
    openStr += ` ${day}`
}

// console.log(openStr)

//Property VALUES
const values = Object.values(openingHours)
// console.log(values)

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries)


//[key, value]
for(const [key, {opening, closing}] of entries){
    console.log(`On ${key} we opening at ${opening} and closinge at ${closing}`)
}