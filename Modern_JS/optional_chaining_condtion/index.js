// Now santhosh family realatives there are not just check with three types
const santhoshFamily = {
  homeFamily: ["murugesan", "vijaya", "ajay", "santhosh"],
  realative: ["deepa", "muthulakshimi", "chinnaponnu"],
  salery(count) {
    console.log(count);
  },
};

// Now i got check santhoshfamily realtives there or not in if else condtion
if (santhoshFamily && santhoshFamily.childs) {
  for (const me of santhoshFamily.realative) {
    console.log(me);
  }
} else {
  santhoshFamily.childs = ["harish", "nadiya", "ammu", "achu"];
  for (const hello of santhoshFamily.childs) {
    // console.log(hello);
    // console.log(santhoshFamily.childs);
  }
}

// Now we go to apply this one like ternary operator
const ternaryOPe = santhoshFamily.childss
  ? santhoshFamily.childs
  : (santhoshFamily.childss = ["nothing to worry"]);

console.log(ternaryOPe);

//Now those are all going to apply es6 method optional chaining
//its ? there its shown answer its not there its given to the undefine
const optional =
  santhoshFamily?.amount ??
  console.log(`${(santhoshFamily.amount = ["its now edited man"])}`);

console.log(optional);
console.log(santhoshFamily);
