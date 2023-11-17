const restaurant = {
  name: "Classico Italiano",

  location: "Via Angelo Tavanti 23, Firenze, Italy",

  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],

  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],

  mainMenu: ["Pizza", "Pasta", "Risotto"],

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

// Now we go to destructing object

const { name, categories, ...others } = restaurant;
console.log(name, categories, others);

// object Not there set defult Message
const { menu = "menu object not there", mainMenu } = restaurant;
console.log(menu, mainMenu);

//Getting value form inside Of object that means Nessted Object
const {
  thu: { open, close },
} = restaurant.openingHours;
console.log(open, close);

//mutataing variable
let apple = 10;
let orange = 20;

let obj = { apple: 100, orange: 200, c: 300 };

({ apple, orange } = obj);
console.log(apple, orange);
