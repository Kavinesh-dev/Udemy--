const restaurant = {
  name: "Classico Italiano",

  location: "Via Angelo Tavanti 23, Firenze, Italy",

  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],

  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],

  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orders: function (starterMenuIndex, mainMenuIndex) {
    return [
      `This was a startMenu List  ${this.categories[starterMenuIndex]} And then Thos All was a ${this.starterMenu[mainMenuIndex]}`,
    ];
  },

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

//Arrays destucting
const [firstElement, secoundElemnt, thirdElement] = restaurant.categories;
console.log(firstElement, secoundElemnt, thirdElement);

//Nested Array destucting
let new_Single_Aarry = ["santhosh", "ajay", ["murugesan", "vijaya"]];
const [me, , [myDad, myMom]] = new_Single_Aarry;
console.log(me, myDad, myMom);

//using function with destructing
console.log(...restaurant.orders(2, 1));
const [oredr1, ...[order2]] = restaurant.orders(3, 3);
console.log(oredr1, order2);

//swabing in array destrcting

let [swab1, swab2] = restaurant.mainMenu;
[swab2, swab1] = [swab1, swab2];
console.log(swab1, swab2);
