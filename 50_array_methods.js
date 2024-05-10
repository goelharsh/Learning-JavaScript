// important array methods

// foreach
// Map
// filter
// reduce

// const array=[4,2,5,8];

// function mulby2(number, index ){
//     // console.log("Index is",index);
//     console.log(`${number}*2 = ${number*2}`);
// }
// mulby2(array[0],0)


// for(let i=0;i<array.length;i++){
//     console.log(i);
//     mulby2(array[i])
// }

//__________________________________________________________

// for each jo hai vo callback ko as a input lega

// const numbers =[4,2,7,6]

// function myfunc(number,index){
//     console.log(`index is ${index} number is ${number}`);
// }
// numbers.forEach(myfunc);   // it will automatically pass everything



//_____________________________________________

// we can write whole function in the brackets

// const numbers =[4,2,7,6]


// numbers.forEach(function myfunc(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });  

// // it is not always required that we write funciton name
// numbers.forEach(function (number,index){
//     console.log(`index is ${index} number is ${number}`);
// });  


// numbers.forEach(function(number,index){
//     console.log(number*2)
// })




//________________________________________________




// const users=[
//     {firstname: "harsh" , age : 23},
//     {firstname: "dhruv" , age : 23},
//     {firstname: "paras" , age : 23},
//     {firstname: "shivam" , age : 23}
// ]

// users.forEach(function(user){
//     console.log(user.firstname)
// })

// for(let user of users){
//     console.log(user.firstname)
// }


//___________________________________________


const users=[
    {firstname: "harsh" , age : 23},
    {firstname: "dhruv" , age : 23},
    {firstname: "paras" , age : 23},
    {firstname: "shivam" , age : 23}
]
// using arrow functions
users.forEach((user)=>{
    console.log(user.firstname);
})