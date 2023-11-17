//When ever you dont want to dublicate array , object , string what evevr data types means we wii you it set Object

//Here some dublicate Values here
let routine = ["wakeUp", "food", "studey", "food", "studey", "sleep"];

//Set Object Syntax
const setObject = new Set(routine);
console.log(setObject.add("hello"));
console.log(setObject.has("food"));

//So its also loooking like a map object You Dont Want to dublicate array that time you can use it all