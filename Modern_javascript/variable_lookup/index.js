//Variable Lookup We cant acccess child Function Varaible to AAnother Child Variable

function first() {
  //parent function oda varaiable tha namma lexical scope nu solluvom
  let myName = "Santhosh";
  let mom;
  secound();

  function secound() {
    momName = "Vijaya";
    third();
  }

  function third() {
    let get = "Fianly";
    console.log(get, myName, momName);
  }
}
first();
