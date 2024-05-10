// trim();
// toUpperCase();
// toLowerCase();
// slice


// let firstName  = "  h a r s h  ";
// console.log(firstName.length);

// firstName.trim();

// console.log(firstName.length);  // here it is again giving the length bcoz   firstName.trim();  this will make a new string with new spaces so this shuld be taken in some varible (variable can be same as previos one or new one )


// here we have used new variable name
/*
let firstName  = "  harsh     a ";
console.log(firstName.length);

let newString= firstName.trim();   // so let can be written here 
console.log(newString);
console.log(newString.length);
*/








// here we have used same variable name
/*
let firstName  = "  harsh  ";
console.log(firstName.length);

firstName= firstName.trim();   // so let can not be written here 
console.log(firstName);
console.log(firstName.length);
*/


/*
let firstName = "harshsdfSDDF "

firstName= firstName.toUpperCase();
firstName= firstName.toLowerCase();
console.log(firstName);
*/

// slice gives substring of a string 
// start index
// end index
let firstName = "harshsdfSDDF" ;
let newString = firstName.slice(0,3);
console.log(newString)