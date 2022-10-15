

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

// console.log(str.trim()); 


// Question 10 

// truthy vaues


// if(true){
//   console.log("true value")
// }
// if(1){
//   console.log("true value")
// }

// if("hello"){
//   console.log("true value")
// }



// Falsy vaues

// if(-0){
//   console.log("true value")
// } else{
//   console.log("false Values")
// }


// if(null){
//   console.log("true value")
// } else {
//   console.log("false value")

// }


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



// question 12 

let now = new Date();
 
// console.log("What is the year today?",now.getFullYear());

// console.log("What is the month today as a number?",now.getMonth());
// console.log("What is the date today?",now.getDate());
// console.log("What is the day today as a number?",now.getDay());
// console.log("What is the hours now?",now.getHours());
// console.log("What is the minutes now?",now.getMinutes());
// console.log("Find out the numbers of seconds elapsed from January 1, 1970 to now.?",now.getUTCDate());



// Question 13 

// const height = prompt("What's your sign?");
// const base = prompt("Enter Base");



// const Area = 0.5 * (height * base)

// console.log("Area",Area)


// Question 14 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let x1 = 6;
let x2 = 10;
let y1 = 2;
let y2 = 2;

let Y = y2-y1;

let X = x2-x1;

let M = Y / X;


// console.log("slope M =", M)


// Question 15

// For y=mx+c :
// Slope = m
// x-intercept = -c/m
// y-intercept = c



let expression = 'y=2x-2'; 

let arr = expression.split('');

// console.log(arr);

let m=Number(arr[2]),c=Number(arr[4]+arr[5]);

// console.log(`Slope is ${m} \nx-intercept is ${-c/m} \ny-intercept is ${c}`);


// # Question 16 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.


function Area(radius) {
    return  Math.PI * (radius *radius);
  }

//   console.log(Math.round(Area(5)));
  

function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }

//   console.log(Math.round(calculateCircumference(5)));

  

// Question 17 

let getDate = new Date();


// console.log(`${getDate.getFullYear()} - ${getDate.getMonth()} - ${getDate.getDate()}  ${getDate.getHours()} : ${getDate.getMinutes()}`)
// console.log(`${getDate.getDate()}  - ${getDate.getMonth()} - ${getDate.getFullYear()}  ${getDate.getHours()} : ${getDate.getMinutes()}`)
// console.log(`${getDate.getDate()}  - ${getDate.getMonth()} - ${getDate.getFullYear()}  ${getDate.getHours()} : ${getDate.getMinutes()}`)


// Question 18 


let yourAge = 12;

// if(yourAge >= 18){
//     console.log("You are old enough to drive");
// }else{
//     console.log(` wait for ${18-yourAge} of years  to turn 18.,`);
// }



// Question 19 
let evenNumber = 11;

// if(evenNumber % 2 == 0){
//     console.log(`${evenNumber} is Even `)
// } else {
//     console.log(`${evenNumber} is Odd` );
// }

//Question 20

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// var Score = 35;

// if(Score >= 90 && Score <= 100){
//   console.log("you Got A Grade")
// } else if(Score >= 70 && Score <= 89) {
//   console.log("you Got B Grade")
// } else if(Score >= 60 && Score <= 69){
//   console.log("you Got C Grade")
// }  else if(Score >= 50 && Score <= 59){
//   console.log("you Got D Grade")
// } else if (Score >= 49){
//   console.log("you Got F Grade")

// }

// question 21

// let months = ["jan", "feb", "march", "april", "may", "june", "july", "August", "sep", "oct" , "nov", "dec"]

// let monthsCheck = (month) => {
//   if(month === "jan" || month === "feb" || month === "dec"){
//     console.log("winter")
//   } else if(month === "march" || month === "april" || month === "may"){
//     console.log("summer")
//   } else if(month === "june" || month === "july" || month === "August"){
//     console.log("monsoon")
//   } else {
//     console.log("autum")
//   }
// }

// monthsCheck("sep")

// months.forEach((month) => {
//   monthsCheck(month)
// })



// question  22 

// let todayDays = new Date();


// function daysInMonth (month, year) {
//   return new Date(year, month, 0).getDate();
// }

// daysInMonth(7,2009); // 31

// console.log(daysInMonth(7,2009));



//Question 25

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']


// // shoppingCart.fill("meat",0 1)

// console.log(shoppingCart);

// shoppingCart.unshift("Meat")
// console.log("add meat",shoppingCart)
// shoppingCart.push("sugar")

// console.log("add sugar",shoppingCart);
// shoppingCart.splice(4,1)

// console.log("remove honey",shoppingCart);


// shoppingCart[4] = "Green Tea"
// console.log("chnages tea",shoppingCart)


//question 26


// let countries = ["india" , "chaina", "Russia", "pakistan"];



// let check = countries.forEach((val) => {
//   if(val === "ethopia"){
//          console.log("ethopia included")
//       }  else{
//         console.log("ethopia not included")
//         countries.push("Ethopia");
//         console.log(countries)
//       }
// })

// for(let element of countries){
//   if(element === "ethopia"){
//      console.log("ethopia included")
//   }  else{
//     console.log("ethopia not included")
//   }
// }


//question 27

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// // Sort the array and find the min and max age

// let minAge = Math.min(...ages)
// let maxAge = Math.max(...ages)
// console.log(minAge);
// console.log(maxAge);

// // Find the median age(one middle item or two middle items divided by two)

// let value = (ages.length ) / 2;
// console.log(value)

// let maidianAge = ages[value] / 2;
// console.log("maidianAge :",maidianAge)

// // Find the average age(all items divided by number of items)

// var sum = 0;

// for (let i = 0; i < ages.length; i++) {
//   sum += ages[i];
// }

// let sumOfAverage = sum / ages.length;

// console.log("average age :",sumOfAverage)

// // Find the range of the ages(max minus min)

// console.log( "Range of the ages :" , maxAge - minAge)


// // Compare the value of (min - average) and (max - average), use abs() method

// let minAverage =  Math.abs(minAge - sumOfAverage);
// console.log("minAerage",minAverage)


// let maxAverage =Math.abs(sumOfAverage - minAge);

// console.log("maxAverage",maxAverage)


//question 28

// Use for loop to iterate from 0 to 100 and print only prime numbers

// let count = 0;
// let i, j;
// for (j = 2; j <= 100; j++) {
//   // console.log(j)
//   for (i = 1; i <= j; i++) {
//     if (j % i == 0)
//       count++
//   }
//   if (count == 2)

//     console.log(j);
//   count = 0;
// }


// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// var sume = 0;
// var sumo = 0;
// for(let i = 0 ; i< 100; i++){
//   if( i % 2 == 0){
//     sume += i;
   
//   }  else {
//     sumo += i;

   
//   }
// }

// console.log("even",sume)
// console.log("odd",sumo)

//Question 30 Problem Statement: Write a script which generates a random hexadecimal number.

// let value = "0123456789ABCDEF"
// let cons = "#";
// for( let i = 0; i < 6; i++){
//   cons = cons + value[Math.floor(Math.random() * 16)];
 
// }

// console.log(cons)

//  question 31 

// const webTechList = ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'C', 'C++', 'Java', 'Python', 'MongoDB', 'Express', 'React', 'Node'];

// const mernStack = ['MongoDB', 'Express', 'React', 'NodeJS'];

// console.log(webTechList.sort())
// console.log(mernStack.sort())

// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array

// const countryList = require("./countries.js");

// let arrLand = [];

// countryList.forEach(e => {
//   if (e.includes('land')) {
//     arrLand.push(e);
//   }
// });


// console.log(arrLand)



// 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more


let height = 130;
let weight = 80;

function bmiCalculator(w,h){
  return (w * 1000) / h ** 2;
}

let bmi = bmiCalculator(height,weight)


if(bmi <= 18.5){
  console.log("underweight")
}else if(bmi < 24.9){
  console.log("normal");
}else if(bmi < 29.9){
  console.log("Overweight")
}else {
  console.log("Obese")
}

console.log(bmi)




 