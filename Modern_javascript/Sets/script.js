/**
 * SETS
 * It consists of unique values...It doesn't accepts duplicate values.
 * sets are also iterable . we can loop over that..
 */

const meals = new Set([
  "Rice",
  "Pasta",
  "Biriyani",
  "Pizza",
  "Biriyani",
  "Biriyani",
  "Pizza",
  "Pasta",
]);
console.log(meals);

console.log(meals.size);
//Like include method (has)
console.log(meals.has("Biriyani"));
console.log(meals.has("Garlic bread"));
//Adding elements to array
meals.add("Fish Fry");
console.log(meals);
//Deleting elements in array
meals.delete("Biriyani");
console.log(meals);

//Looping over set
for (const menu of meals) console.log(menu);

//Coversion from set to array
const friends = ["Divyesh", "Saamy", "Santhosh", "Saamy", "Kavinesh", "Naresh"];
//Unpacking here
const uniqueFriends = [...new Set(friends)];
console.log(uniqueFriends);

const valueOf = new Set(friends);
console.log(valueOf.size);

