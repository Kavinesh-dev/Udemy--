// let data = {
//     name: "Kavinesh",
//     gender: "Male",
//     email: "kavinesh@gmail.com",
//     status: "Active",
// };

// let options = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: "Bearer 70cd6e556a8219443e6ecff8394062027cd3c69dda3a1dd946e982244a73f9e5"
//     },
//     body: JSON.stringify(data)
// };

// fetch("https://gorest.co.in/public-api/users", options)
//   .then(function(data) {
//     return console.log(data);
//   })
  
// console.log(data)
  // var emoji = emojione.toShort("👩‍💻"); 
  // console.log("I love coding with " + emoji + "!");


//   function sevenBoom(arr) {
//     let foundSeven = false; // Initialize a variable to track if 7 is found in the array.

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 7) { // Check if the element at index i is 7.
//             foundSeven = true; // If 7 is found, set the flag to true.
//             break; // Exit the loop early, as we found a 7.
//         }
//     }

//     if (foundSeven) {
//         console.log("Boom!!"); // If a 7 is found, print "Boom!!".
//     } else {
//         console.log("There's no 7 in the array"); // If no 7 is found, print this message.
//     }
// }

// console.log(sevenBoom([1, 2, 3, 4, 6, 7]));
// function login() {
//     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//     var currentDate = new Date();
//     var formattedDate = Utilities.formatDate(currentDate, SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetTimeZone(), "yyyy-MM-dd HH:mm:ss");
//     sheet.getRange("C6").setValue(formattedDate);
//   }
  
  
//   function logout() {
//     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//     var currentDate = new Date();
//     var formattedDate = Utilities.formatDate(currentDate, SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetTimeZone(), "yyyy-MM-dd HH:mm:ss");
//     sheet.getRange("D6").setValue(formattedDate);
//   }
  
  
//   function cleanData() {
//     var sheet = SpreadsheetApp.getActiveSheet();
//     var cellC6 = sheet.getRange("C6");
//     var cellD6 = sheet.getRange("D6");
//     cellC6.setValue("");
//     cellD6.setValue("");
//   }
  
  
//   function onOpen() {
//     var ui = SpreadsheetApp.getUi();
//     ui.createMenu('Custom Menu')
//       .addItem('Submit', 'submitData')
//       .addToUi();
//   }
  
  
//   function submitData() {
//     var ss = SpreadsheetApp.getActiveSpreadsheet();
//     var sheet = ss.getActiveSheet();
//     var range = sheet.getRange("A6:D6");
//     var values = range.getValues();
  
  
//     var backendSheet = ss.getSheetByName("Backend");
//     backendSheet.appendRow(values[0]);
  
  
//     range.clearContent();
//   }
  
  
function printForecast(arr){
  let str = ''
  let count = 1;
  for(let i = 0;i < arr.length; i++){
      //  console.log("..." + arr[i] + "^C in " + (count++) + " days")
      str = str + ` ${arr[i]}`
  }
 console.log(str)
}

printForecast([17, 21, 23])
  
  

