const numbers = [1,2,3,4,5,6];
 
// to understand reduce method
// aim: sum of all the numbers in array


// numbers.reduce(()=>{}); using arrow functions


const sum= numbers.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
});

// 1st function call
// accumulator,    currentValue,    return
//    1                  2            3

// 2st function call
// accumulator,    currentValue,    return
//    3                  3            6

// 3rd function call
// accumulator,    currentValue,    return
//    6                  4            10

// and so on


console.log(sum);