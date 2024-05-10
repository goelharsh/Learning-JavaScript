// undefined

let firstName ="";


console.log(typeof firstName)

firstName= "harsh";
console.log(typeof firstName, firstName)

// null

let myVariable = null;
console.log(myVariable);

myVariable= "harsh";
console.log(myVariable, typeof(myVariable));

// But this will give is output as --> object
console.log(typeof null);
// this is bug or error on javascript
// this bug can not be removed as lots of code has already been written by the people so if this by is fixed hen the all code  has t be modified


// BigInt

let myNumber = BigInt(123);// this two are the method to declare a bigint variable
let sameNumber  = 123n;
// console.log(myNumber);

console.log(Number.MAX_SAFE_INTEGER);   // this will tell us that how big number can we store in javascript


console.log(myNumber + sameNumber);
