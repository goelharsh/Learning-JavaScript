let num1 = 6;
let num2 =  num1;


// these numbers are of primitive data types

// console.log("Value of num1 is", num1);
// console.log("Value of num2 is", num2);

// num1++;
// console.log("After increamenting one")
// console.log("Value of num1 is", num1);
// console.log("Value of num2 is", num2);   // here num2 value is not changing 
//bcoz primitive data types are stored in stack and the memory space fo num1 and num2 will be different


// Reference types
// Array
let array1 = ["item1", "item2"];   // this array will be stored in heap  
let array2 = array1;
console.log("array1", array1);
console.log("arrray2", array2);
array1.push("item3");
console.log("array1", array1);
console.log("arrray2", array2);    // but here array2 value has been changed   bcoz as the array is created in heap so when the pointers of both array will point on array in heap then the pointers will point on same array