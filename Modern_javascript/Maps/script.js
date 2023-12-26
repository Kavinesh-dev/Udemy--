/**
 * MAPS
 * It is a data structure that we use to map values to keys.
 * Just like a objects data that are stored in maps are like key value pair.
 * where both the keys and the values can be of any data type. Unlike objects, which only allow strings and symbols as keys, Maps accept any data type as keys.
 */

const any = new Map();
any.set("name", "kavinesh");
any.set("age", 19);
any.set("studies", "college");
any.set(1, "Chennai");

console.log(any);

any
  .set("role", "developer")
  .set("interested", [
    "security",
    "development",
    "tech",
    "stockmarket",
    "business",
  ])
  .set("hasBike", true)
  .set("busy", 6)
  .set("free", 9)
  .set(true, "We are open :)")
  .set(false, "We are closed :(");

const arr = [1, 2];
any.set(arr, "test");
console.log(any.get(arr));

console.log(any.get("role"));
console.log(any.get("interested"));

let busyFree = 8;
console.log(any.get(busyFree > any.get("busy") && busyFree < any.get("free")));


//MAPS: Iteration

