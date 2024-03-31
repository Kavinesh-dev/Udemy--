//Using ParseInt
console.log(Number.parseInt(2));
//type coercion
console.log(+"20");
console.log(Number.parseInt(2.555555));
console.log(Number.parseInt("20X", 10));
console.log(Number.parseInt("kavinesh"));

//Using ParseFloat
console.log(Number.parseFloat(2.555555555));
console.log(Number.parseFloat("2.555555555"));
console.log(Number.parseFloat(2));
console.log(Number.parseFloat("30px"));

//Using isNaN
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(23 / 0));
console.log(Number.isNaN(+"20X"));

//Using isFinite
console.log(Number.isFinite(23));
console.log(Number.isFinite(23 / 0));
console.log(Number.isFinite("24"));
console.log(Number.isFinite(23.4));

// Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));
console.log(Math.floor(23.3));
console.log(Math.floor("23.9"));
console.log(Math.trunc(23.3));
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));

//Remainder operator
console.log(6 % 3);
console.log(7 % 2);
console.log(23 % 3);
console.log(78 % 2);

//Numberic seperator
const sum = 287_89_38;
console.log(sum);

console.log(Number("234_278")); //This might lead to some bugs in the application / Do not use like this
console.log(parseInt("234_43"));

//Bigint
console.log(2783728787327979729729n);
console.log(BigInt(2729877272798982));

console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));
// Operations
console.log(10000n + 100000);
console.log(36286372637263726376237263726372632n * 100000000);
const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));
// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == "20");
console.log(huge + "is REALLY big!!!");
//Date
const now = new Date();
console.log(now);

console.log(new Date("Jan 1 , 2024"));
// Create a date 4
/*
const now = new Date();
console.log(now);
console.log(new Date('Aug 02 2020 18:05:41'));
console.log (new Date('December 24, 2015'));
console.log(new Date(accountl. movementsDates [0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
*/
// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));
