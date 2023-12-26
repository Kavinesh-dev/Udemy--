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

const subjects = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(subjects);

// for(const item of subjects.entries()) console.log(item)

for (const [i, l] of subjects.entries()) {
  // console.log(`${i + 1}: ${l}`)
}

//Looping over values, keys, and entries

const openHr = Object.entries(restaurant.openingHours);
// console.log(open);

for (const [key, { opening, closing }] of openHr) {
  console.log(`On ${key} we are open at ${opening} and close at ${closing}`);
}
