// Now we are creating a normal object

let santhoshobject = {
  anotherName: "Obito Uchiha",
};
let charli = {
  name: "santhoshobjectcharli",
};

//Noraml object task create third object and given to that object key keys also objeect[santhoshobject] object and that value like "helloWorld"
//Now i given to the object this case key[object] = "this s object" now i wrote this output

let givenObject = {};
givenObject[santhoshobject] = "This a object";
// console.log(givenObject);

//Normal object we cant set key a object Thats why we move on Map Object
//Another Benifit Means Map Object Avoid Dublicate Entires

const mpaSyntax = new Map();
const setting_Key_Value = mpaSyntax.set(
  santhoshobject,
  "Im setting in a map Object"
);
const setting_Key_Value2 = mpaSyntax.set(charli, "Another Objecct Here");
const gettigkey = mpaSyntax.keys();
const gettingSize = mpaSyntax.size;
const checking_with_Hash = mpaSyntax.has(santhoshobject);
const gettingValue = mpaSyntax.get(charli);
const clear = mpaSyntax.clear(santhoshobject);

console.log(setting_Key_Value);
console.log(gettigkey);
console.log(gettingSize);
console.log(checking_with_Hash);
console.log(gettingValue);
console.log(clear);
