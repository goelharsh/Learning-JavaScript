// typeof Operator
/*
let age= 22;
let firstName = "harsh";
console.log(typeof age);
console.log(typeof firstName);
*/

//  Primitive Data Types

// string "harsh";
// number 2,3,4,5
// booleans
// undefined
// null
//  BigInt
// Symbol




// Convert number to string 
let age = 22;
let firstName = "harsh";

// console.log(typeof age)
//22 -->  "22";

age = age + "";
console.log(typeof age);   // this ans the below one are the two method two see type of age and converting the number into string
console.log(typeof (age + ""));





// Now to convert a string into number just write + sign before the double codes ,   for ex:-  +"34"
let  myString = +"34";
console.log(typeof myString);


// This is the another method to change a number into string   i.e just typewrite the age into string 
let oldage = "18";
// oldage= String(age);
oldage= Number(age);
console.log(typeof oldage);
