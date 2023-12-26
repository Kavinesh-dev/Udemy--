//IndexOf() - it gives the first index number of the word.
const name = "Iam a developer and used to be a developer always!";
console.log(name.indexOf("d"));
//lastIndexOf() - it gives the last index number of the word.
console.log(name.lastIndexOf("d"));

//Slice - to remove the certain part of the string
console.log(name.slice(name.indexOf("d"), name.lastIndexOf("d")));

//TASK: Using slice method

function alpha(val){
    return val.replace(val[0], val[0].toUpperCase());
}
console.log(alpha("kavinesh"))
console.log(alpha("divyesh"))
console.log(alpha("santhosh"))

//Trim method
const trimName = "            kavinesh            ";
console.log(trimName.trim());

//Replace method - it replaces a particular part of a string with another words or anyother string
console.log(name.replace("Iam", "kavinesh"));   

//Includes method - it checks if the expected word is available in the string (it returns the output in boolean values[true or false])
console.log(name.includes("Iam"));

//Split method - it splits the string into seperate words 
console.log(name.split(" "));    

//Join method - it combines the splitted string
console.log(name.split("").join(''));