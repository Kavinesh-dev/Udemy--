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

console.log("================OPTIONAL CHAINING=============");
//It means it checks the certain objects exists using ? this symbol if it doesn't exist immediately it returns undefined...
//Checks the value in the left does exist
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const val = restaurant.openingHours[day]?.opening ?? "closed";
  console.log(`On ${day} we open at ${val}`);
}

// console.log(restaurant.openingHours.mon.open)//returns error because it doesn't exist
//optional chaining
// console.log(restaurant/.openingHours?.thu.opening); //returns undefined because we using ? to the property name it checks if the property mon exists or not . It doesn't exist so it retusn undefined

//Methods

console.log(restaurant.order?.(2, 1) ?? "Method doesn't exist");
console.log(restaurant.orderPizza?.(2, 1) ?? "Method doesn't exist bro");

//Arrays

const users = [
  { name: "kavinesh", age: 18, profession: "developer" },
  { name: "divyesh", age: 15, profession: "Basketball Player" },
];
console.log(users[1]?.age || "User doesn't exist");
