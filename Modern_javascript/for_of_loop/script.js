const restaurant = {
  name: 'Classico Italiano',
  place: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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

  userOrder: function({startIndexValue, mainIndexValue, address, time}){
    console.log(`Your order of ${this.starterMenu[startIndexValue]} and ${this.mainMenu[mainIndexValue]} will be delivered to ${address} by ${time}`)
  },

  unlimited: function(...damn){
    console.log(damn)
  }
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for(const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`)