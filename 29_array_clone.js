// how to clone array
/*

// how to contacatinate two arrays , i.e we want to seperate arrays

let array1 = ["item1", "item2"];
let array2 = ["item1", "item2"];

// but this method of cloning the arrays is not gud as if we want 1000 items then we have to write this line for 1000 times


// let array2 = array1;
array1.push("item4");


console.log(array1===array2);
console.log(array1)
console.log(array2)

*/




//__________________________________________

// so we will use slice method




// let array1 = ["item1", "item2"];
// let array2 = array1.slice(0);

// array1.push("item4");


// console.log(array1===array2);
// console.log(array1)
// console.log(array2)

//___________________________________________

// ANOTHER METHOD

// let array1 = ["item1", "item2"];
// let array2 = [].concat(array1); 

// array1.push("item4");


// console.log(array1===array2);
// console.log(array1)
// console.log(array2)


//_______________________________________

// ANOTHER WAY IS BY  =USING SPREAD OPERETER


// let array1 = ["item1", "item2"];
// let array2 = [...array1]; 

// array1.push("item4");


// console.log(array1===array2);
// console.log(array1)
// console.log(array2)


//_________________________________________

/*

// NOW WE WANT EVERY ELEMENNT OF ARRAY 1 + SOME EXTRA ITEMS
//  SO FOR THAT THIS IS THE SYNTAX and their are two methods



let array1 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]); 
// let array2 = [].concat(array1,["item3", "item4"]);
let array2 = [...array1, "item3" , "item4"];

// these all are the three method two do this thing 

array1.push("item4");


console.log(array1===array2);
console.log(array1);
console.log(array2);


*/


// _________________________________________________


let array1 = ["item1", "item2"];

let oneMoreArray = ["item2", "item4"];

let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);





