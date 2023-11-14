// Now we going to see Object Looping
const shops = {
  shopName: "santhosh",
  mobiles: {
    oppo53: 15000,
    vivoa53: 20000,
  },
  battery: {
    oppo53Battery: "Life 100%",
    vivoa53Battery: "Not well 50%",
  },

  quality: {
    oppo53Quality: "Good You Can Buy",
    vivoa53Quality: "Not Goood You Not Buy This One",
  },
};

// You go to try loop for object  TypeError: shops is not iterable you got taht error
//This function given a result array output Object.entries(shops)
for (const looping of Object.entries(shops)) {
  console.log(looping);
}

// Object.entries(shops);
const [, mobile] = Object.entries(shops);
console.log(`Now i Got A key ${mobile[0]} And now i got Values ${mobile[1]}`);

// Object.keys(shops);
const [, mobile1] = Object.keys(shops);
console.log(`object keys ${mobile1}`);

// Object.values(shops);

const [, value] = Object.values(shops);
console.log(value);
