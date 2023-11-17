//Now we are  going to learn OR || operator its not only Given boolen values True and False its shortcharcuit

console.log(
  `This case || its working Anyone true after its print never consider about next condtion 3 || santhosh`,
  3 || "santhosh"
);
console.log(`0 || ajay`, 0 || "ajay");
console.log(
  `This case undefine have a falsy value and Null have a 0 value`,
  undefined || null
);
console.log(`7 || 7 = `, 7 || 7);
console.log(`6 || 7`, 6 || 7);

//Chain method of || condition

console.log(
  `Over all answer is`,
  0 || undefined || null || "santhosh" || 35 || true
);

//Now we going to see AND && its operator its not only Given boolen values True and False its shortcharcuit

console.log(7 && "santhosh" && null);
console.log("santhsoh" && "ajay");
//Everything true means its given to the Right hand side Output
console.log("murugesan" && "vijaya");
