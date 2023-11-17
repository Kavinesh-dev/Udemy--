// Spreed operator using arrays with add two arrays;
const parents = ["murugesagn", "vijayakodi"];
const chilldren = ["santhosh", "ajay"];
const spreedOperator = [...parents, ...chilldren];
console.log(`The adding ${parents} and ${chilldren} using spreed ${chilldren}`);

//Spreed operator using with strings every string seprate form comma ,
let myName = "santhosh";
console.log(
  `${myName} sprate from comma and i do for spreed operator `,
  ...myName
);

//Spreed operator using to object getting two object probrty and save one and log it
const twoGrandma = {
  one: {
    name: "Chinnaponnu",
    age: 58,
    from: "Eathakovil",
    chilldren: ["Vijayakodi", "Deepa", "Muthulakshimi"],
  },

  another: {
    name: "Pechiyammal",
    age: 65,
    from: "Toppupatty",
    chilldren: ["Murugesan", "Velraj", "Kanasan"],
  },
};

// let allInfo = [...twoGrandma.one.chilldren];
const { one, another } = twoGrandma;
// console.log(...allInfo);
// spreed operator spreed pannum comma bsae la at the same time if you want its giving tou single variable value
console.log(...one.chilldren, ...another.chilldren);
console.log(one, another);
//Lests join chinnaponnu childrem and pechiammal children

let checkSpreed = {
  hello: ["hello", "world", "mom", "dad", "brother"],
};

// two object merging
const twoInOne = { ...twoGrandma, ...checkSpreed };
console.log(twoInOne);

//getiing some children elemnt here before assign ... called rest its given array

const [free4talk, ...everthing] = [...twoGrandma.one.chilldren];
//here ...dot its called spreed unpacking array given single value and its working as a string comma sprate
console.log(...free4talk, ...everthing);
