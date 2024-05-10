// function hello(){
//     console.log("hello world")
    
// }
// hello();
// hello.call();

// call apply bind

//_____________________________


// const user1={
//     firstname:"harsh",
//     age:5,
//     about: function(){
//         console.log(this.firstname,this.age)
//     }
// }
// // hmne about user krna hai user2 ke liye
// // user1 se uska about method borrow krna hai
// const user2={
//     firstname:"dhruv",
//     age:10,
// }

// user1.about.call(user2)  // this is the method
// user1.about.call()   // as no value is passed so it will give undefined


//_________________________________________


// const user1={
//     firstname:"harsh",
//     age:5,
//     about: function(hobby,favmusician){
//         console.log(this.firstname,this.age,hobby,favmusician)
//     }
// }
// // hmne about user krna hai user2 ke liye
// // user1 se uska about method borrow krna hai
// const user2={
//     firstname:"dhruv",
//     age:10,
// }

// user1.about.call(user2,"guitar","armanMalik");

//_________________________________-

// we can also define the function outside
// function about(hobby,favmusician){
//     console.log(this.firstname,this.age,hobby,favmusician)
// }
// const user1={
//     firstname:"harsh",
//     age:5,

// }

// const user2={
//     firstname:"dhruv",
//     age:10,
// }

// about.call(user2,"guitar","mozart")

//________________________________________


//apply
// function about(hobby,favmusician){
//     console.log(this.firstname,this.age,hobby,favmusician)
// }
// const user1={
//     firstname:"harsh",
//     age:5,

// }

// const user2={
//     firstname:"dhruv",
//     age:10,
// }

// about.apply(user2,["guitar","armanMalik"])  // yha arguments ki jagah ek array pass kr denge



//________________________________________


// bind

// function about(hobby,favmusician){
//     console.log(this.firstname,this.age,hobby,favmusician)
// }
// const user1={
//     firstname:"harsh",
//     age:5,

// }

// const user2={
//     firstname:"dhruv",
//     age:10,
// }

// about.bind(user2,"guirtar","singa" )   // bind always return a function

// const func=about.bind(user2,"guirtar","singa" )   // bind always return a function
// func();

//___________________________________

// mistake to avoid


const user1={
    firstname:"harsh",
    age:5,
    about: function(){
        console.log(this.firstname,this.age)
    }
}

// user1.about();  // it will give us required result

const myFunc=user1.about;   // it will not give us required result bcoz 'this' keyword is not binded here
 myFunc();

//  to get the required results
const myfunc=user1.about.bind(user1);
myfunc()