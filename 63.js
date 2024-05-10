//arrow functions
// arrow functions me this nhi hota

// arrow function this jo hai vo apni surrounding se leta hai
// inka this window hoga
// aroow fuc ka this change nhi ho skta


const user1={
    firstname:"harsh",
    age:5,
    about: ()=>{
        console.log(this.firstname,this.age)
    }
}

user1.about(user1);