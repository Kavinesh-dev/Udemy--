//Default parameter - setting default values to the parameters
// const defaultValue = (name, age = 18) => console.log(name, age);
// defaultValue("kavinesh");

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passport === 24739479284) {
    // alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

checkIn(flight, jonas);
console.log(jonas);

//Call by Primitive type
let name = "kavinesh"; //Address: 0001 
let another_name = name; //Address: 0001;
console.log(name);
console.log(another_name);

//New address is changed in the call stack
name = "Santhosh";//Address: 0002 (Value santhosh)
console.log(name);


//Call by Reference type
//It creates a new address and stores the values in the heap memory
const Name = {
    name: 'Kavinesh',
    age: 20
}
//Copying the value but it holds the same address
const new_Name = Name; //Creating new variable and pointing it to the same address as Name address
new_Name.age = 21; //Changing the value it reflects in both Name and new_Name because they both have same address
console.log(new_Name);