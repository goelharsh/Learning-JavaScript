/*

// differene between dot and bracket notations

const person={
    name:"harsh",
    age:22,
    // hobbies:["guitar","sleeping","listening music"]

    // now if want to give the  hobbies to person hobbies 
    // so to manage the space write it in double codes
    "person hobbies": ["guitar","sleeping","listening music"]
}
    // console.log(person.person hobbies); 
    // above line will give error so we can use dot
    console.log(person["person hobbies"]);

*/



// _____________________________________________________
//Now

// differene between dot and bracket notations
const key="email";
const person={
    name:"harsh",
    age:22,
    // hobbies:["guitar","sleeping","listening music"]

    // now if want to give the  hobbies to person hobbies 
    // so to manage the space write it in double codes
    "person hobbies": ["guitar","sleeping","listening music"]
}
    // console.log(person.person hobbies); 
    // above line will give error so we can use dot
    
    person.key = "harshgoel@gmail.com";
    console.log(person);

    person[key] = "harshgoel@gmail.com";
    console.log(person);
    