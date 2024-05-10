const myArray = ["value1", "value2", "value3", "value4"]
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar 1", myvar1);
// console.log("value of myvar 2", myvar2);


// the above work can be done in a shortcut way

let [myvar1, myvar2, ...myNewArray] = myArray;
// myvar1 = "value changed"
// so this single line work for the two line that we have written for the var1 and var2
console.log("value of myvar 1", myvar1);
console.log("value of myvar 2", myvar2);
console.log("value of myvar 2", myNewArray);

