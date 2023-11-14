// but var ku Temporal Dead Zone  top la ye start aii end aidum
//Temporal Dead Zone Start Default aha ethu start aidum Let And Const ku

console.log(nameVar);
console.log(nameLet); //Temporal Dead Zone  continue here . ethu innum end akala so ippo call panna error kattum
let nameLet = "santhoshLet";
const nameConst = "santhoshConst"; //Temporal Dead Zone  End aidum
console.log(nameConst); //Temporal Dead Zone now ended so no errors
var nameVar = "santhosVar";
