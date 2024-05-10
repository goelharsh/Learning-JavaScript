// const user1={
//     firstname:"harsh",
//     age:5,
//     about: function(){
//         console.log(this.firstname,this.age)
//     }
// }


const user1={
    firstname:"harsh",
    age:5,
    about(){
        console.log(this.firstname,this.age)
    }
}

user1.about()