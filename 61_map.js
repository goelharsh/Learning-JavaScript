// Map
// map iterable
// store data in ordered fashion

// store key value pair(like object)
//duplicate leys are not allowed like objects

// different between maps and objects

//objects can only have string or symbol
//as key

// in map you can use anything as key
// like array, number, string


///object literal
// key--> string    hmari keys hmesha string me hoti hai(jyadatar)
// key--> symbol


// const person={
//     firstname:"harsh",
//     age:7,
//     1:"one"
// }

// // console.log(person.firstname)
// // console.log(person["firstname"])
// for (let key in person){
//     console.log(key)
// }

//_________________________________-
// map
// map me hum key kisi bhi type ki rkh skte hain
// const person=new Map();

// person.set("firstname","harshit");
// person.set('age',7);
// person.set(1,"one");


// console.log(person.get('firstname'))
// console.log(person.get('age'))
// console.log(person.get(1))

// console.log(person.keys());


// for(let key of person.keys()){
//     console.log(key,typeof(key))
// }


// for(let key of person){
//     console.log(key)  // it will give us array
// }

// for(let key of person){
//     console.log(Array.isArray(key))
// }



// for(let [key,value] of person)
// {
//     console.log(key,value)
// }


// this is another method to give key value pairs
// const person =new Map([['firstname','harsh'],['age',7],['gender', 'male']])
// console.log(person)

// /__________________________________________s_
// mapping of object with object
const person1={
    id:1,
    firstname:"harsh"
}
const person2={
    id:2,
    firstname:"harshit"
}

const userinfo=new Map();
userinfo.set(person1,{age:8,gender:'male'});
userinfo.set(person2,{age:9,gender:'female'});

console.log(userinfo)

console.log(person1.id);
console.log(userinfo.get(person1).gender)
console.log(userinfo.get(person2).gender)







// iske baad me sidha call, apply, bind method kr rha hu