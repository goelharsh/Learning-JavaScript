
/*


// for loop in  array

let fruits = ["apple", "mango", "grapes", "banana"];

// console.log(fruits.length);  // used to print length
// console.log(fruits[2]);  // used to print some index
// console.log(fruits[fruits.length-1]);  // use to print last index

for(let i=0;i<fruits.length;i++){
    
    // console.log(fruits[i]);
    console.log(fruits[i].toUpperCase());
}

*/

//_________________________________________________


// for loop in  array

let fruits = ["apple", "mango", "grapes", "banana"];

let fruits2 = [];


// here we are pushing the elements of fruits into fruits2
for(let i=0;i<fruits.length;i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);






