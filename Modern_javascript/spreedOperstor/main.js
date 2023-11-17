// So its was a spred operator

//....................................Its Can do .............................................................
//......................* itrate pannalm, copy pannlam, single value element ah aget pannalam.................
//..............*etha namma object la mattum itreate panna mudiyathu.....................................................

let family = {
  name: "obito",
  age: 20,
  method: function (mother, father, brother) {
    console.log(`Its my ${mother} and ist my ${father} and another ${brother}`);
  },
};

let names = [
  prompt(`enter mother name `),
  prompt("enter father name"),
  prompt("enter brother name"),
];

family.method(...names);
