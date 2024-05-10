// function addTwo(a,b){
//     return a+b;
// }
// const ans=addTwo(4);
// console.log(ans);



// function addTwo(a,b=0){    // here we have given b as default parameters
//      return a+b
//     }

// const ans=addTwo(4);
// console.log(ans);







// rest parameters
// function myfunc(a,b,c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`a is ${c}`);
// }
// myfunc(3,4,5);
// myfunc(34,6,7,5,7,7,6,5)  // yha per sari print nhi hone ki

// hum chahtte hai ki a or b ki vlaue fix rhe or baki sari values array bnke c me chli jaye




// function myfunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myfunc(3,4,5,6,4,7,4,8,4);




// function addAll(...numbers){
//     console.log(numbers);
//     console.log(Array.isArray(numbers));
// }
// addAll(1,2,3,4,5,6,7,8,9)



function addAll(...numbers){
    let total=0;
    for(let number of numbers){
        total=total+number;
    }
    return total
}
const ans=addAll(1,2,3,4,5,6,7,8,9)
console.log(ans)