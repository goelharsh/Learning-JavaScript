// in case of function declaration
// hello function will work if it is called before creating it

// hello();

// function hello(){
//     console.log("hello");
// }
//______________________________________________


// but here it will give error in case of function expression
// hello();
// let hello= function(){
//     console.log("hello world")
// }

//______________________________________________

// here in case of var 
// it is giving output as undefined

console.log(hello);
var hello="hello world"


//____________________________


// in case of const it is giving error
console.log(hello);
const hello="hello world"

