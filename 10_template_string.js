// Template string s

// let age = 22;

// let firstName  = "harsh";

// We want to print this line "my name is harsh and my age is 21";
// let aboutMe="my name is " + firstName + " and my age is " + age;

// console.log(aboutMe)



// Now writing the above line is to difficult so to reduce the complexity we use template


let age = 22;

let firstName  = "harsh";

let aboutMe= `my name is ${firstName} and my age is ${age}`;
console.log(aboutMe);