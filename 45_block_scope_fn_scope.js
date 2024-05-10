// block scope vs function scope

// let and const are block scope


// {
// let firstName="harsh";
// console.log(firstName)

// }

// console.log(firstName);  // it will give error because let and const are block scope

// {
//     let firstName="goel";
//     console.log(firstName);
// }

// this is in global scope
// const firstName="garima"
// console.log(firstName)



//__________________________________
// var is function scope


// {
//     var firstName="harsh"
//     console.log(firstName)
// }
// {
//     var firstName="goel";
//     console.log(firstName)
// }
// console.log(firstName);

//____________________________________________


// if(true){
//     let firstName="harsh";
//     console.log(firstName);
// }

// console.log(firstName
    
    //__________________________

function myApp(){
    if(true){
        let firstName="harsh";
        console.log(firstName);
    }
    console.log(firstName)
}
myApp();