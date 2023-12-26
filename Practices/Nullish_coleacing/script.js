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

//Using ? (ternary) operator
const some = restaurant.add ? restaurant.add : "Kavinesh";
console.log(some);

//Using || (or) operator

console.log(restaurant.add || "kavinesh");

//Using && (and) operator

console.log(restaurant.add && "Kavinesh");

//Using nullish coalescing operator ??
//Undefined null false - these the only values that considered as negative

let items_available = 0;

console.log(items_available ? 10 : items_available);

console.log(items_available || "False it");
console.log(items_available && "False it");
console.log(items_available ?? "false");

const hello = [10, 20, 30, 40, 50];

for (let i = 0; i < hello.length; i++) {
    if (i === 4 && hello[i] === 50) {
        console.log("Hello");
    } else {
        console.log("Null");
    }
}
