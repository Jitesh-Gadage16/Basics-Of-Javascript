

// question one

var fullName = "Jitesh Gadage";
var Age = 22.2;
var isLoggedIn = true;
var userName;
var coursePurchased = null;

// console.log( "fullName:", fullName + " " + "(type - " + typeof fullName + ")")
// console.log( "Age:", Age + " " + "(type - " + typeof Age + ")")
// console.log( "isLoggedIn:", isLoggedIn + " " + "(type - " + typeof isLoggedIn + ")")
// console.log( "userName:", userName + " " + "(type - " + typeof userName + ")")
// console.log( "coursePurchased:", coursePurchased + " " + "(type - " + typeof coursePurchased + ")")

// Question Two - Interploation method.

let firtsName = "Jitesh";
let lastName = "gadage";
let maraitalStatus = "unMarrid";
let country = "India";
let age = 22;

// console.log(`First Name : ${firtsName}`)
// console.log(`Last Name : ${lastName}`)
// console.log(`Maraital Status : ${maraitalStatus}`)
// console.log(`Country : ${country}`)
// console.log(`Age : ${age}`)



// Question 3 - toUppercase() Method


var fullName = "jitesh Gadage";

let getUppercase = fullName.toUpperCase();

// console.log(getUppercase);


// Question 4 includes() method.

let codeingLanguage = "scripts"; // String


// console.log(codeingLanguage.includes("scripts"));


// Question 5 Split() Method

let myName = "Jitesh Gadage " //string


// console.log(myName.split(' ', 2));  // split(initail index(included) , final Index (excluded) )


// Question 6 

let companies = 'Facebook, Apple, Google, Microsoft, Apple, IBM, Oracle, Amazon';


let splits = companies.split(' ', 7);
// console.log(splits)


// Question 7 lastindexOf()

// let getIndexNumber = splits.lastIndexOf('Apple');

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// console.log(animals.lastIndexOf('Dodo'));

// console.log(getIndexNumber);


// Question 8 indexOf()

let Sentance = "You cannot end a sentence with because because because is a conjunction";

// console.log(Sentance.indexOf("because"));


// Question 9  trim() Method

let str = "    HelloWorld       ";

console.log(str.trim()); //


// Question 10 




// Question 11 
 
// console.log("- 4 > 3 " ,4 > 3);

// console.log("4 >= 3 ",4 >= 3); 

// console.log("4 < 3 ",4 < 3);
 
// console.log("4 <= 3 ",4 <= 3);

// console.log("4 == 4 ",4 == 4);

// console.log("4 != 4 ",4 != 4);

// console.log("4 !== 4 ",4 !== 4);

// console.log("4 == 4 ",4 == 4);

// console.log("4 == '4' ",4 == '4');

// console.log("4 === '4' ",4 === '4');

// let a = "python";

// let b = "jargon";

// console.log(a.length > b.length)


let now = new Date();
 
console.log("What is the year today?",now.getFullYear());

console.log("What is the month today as a number?",now.getMonth());
console.log("What is the date today?",now.getDate());
console.log("What is the day today as a number?",now.getDay());
console.log("What is the hours now?",now.getHours());
console.log("What is the minutes now?",now.getMinutes());
console.log("Find out the numbers of seconds elapsed from January 1, 1970 to now.?",now.getUTCDate());


