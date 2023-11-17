// Now we are working with strings Slice And Indexof() , Lastindexof()

let demo = "Hello World Santhosh";

// Okay those are all given the Index Number Output
console.log(`Finding H First word From Demo =>  ${demo.indexOf("h")}`);
console.log(`Finding SH Last word From Demo => ${demo.lastIndexOf("sh")}`);

//Going to use as a Slice() => Method
console.log(
  `You want to start Ello world santhosh means Just Put 1 =>   ${demo.slice(
    1,
    demo.indexOf("santhosh")
  )}`
);
//Its last index of
console.log(
  `You want to start Ello world santhosh means Just Put 1 =>   ${demo.slice(
    0,
    demo.lastIndexOf("santhosh")
  )}`
);

//Getting spacee form string
console.log(demo.slice(0, demo.lastIndexOf(" ") + 1));
//Accese with using Numbers
console.log(demo.slice(0, -2));

//First Letter Only UpperCase Task
let passanger = "vIJya";

console.log(
  passanger.charAt(0).toUpperCase() + passanger.slice(1).toLowerCase()
);

//Now using to trim();
let str = "\t  \nHello, World!\t  \n";
let trimmedStr = str.trim();

console.log(trimmedStr); // Output: "Hello, World!"

//Now using includes
console.log(str.includes("World"));
//replacing string
let originalString = "Hello, world!";
let searchString = "world";
let replacementString = "ChatGPT";

let modifiedString = originalString.replace(searchString, replacementString);

console.log(modifiedString);
