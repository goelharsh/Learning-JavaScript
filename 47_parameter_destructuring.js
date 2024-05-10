// param destructuring

// object
//react

// const person={
//     firstName:"harsh",
//     gender: "male"
// }

// function printDetails(obj){
//     console.group(obj.firstName);
//     console.log(obj.gender);
// }
// printDetails(person)


// now we  will destructure the object


const person={
    firstName:"harsh",
    gender: "male"
}

function printDetails({firstName, gender}){
    console.group(firstName);
    console.log(gender);
}
printDetails(person);