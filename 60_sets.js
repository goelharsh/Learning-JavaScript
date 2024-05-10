// sets(it is iterable)
// store data// sets also have its own methods
// no index based access
// order is not guranteed
// unique items only(no nuplicated allowed


const numbers=[1,4,3,4,5,6];// normal array

// this is the way to make set
// const numbers2=new Set();

// we can write any iterable inside the paranthesis
const numbers3 =new Set([1,3,2])  
console.log(numbers3)

// no duplicates are allowed
// we can write any iterable inside the paranthesis
const numbers4 =new Set([1,3,4,5,5,5,2,2,3,1,6])  
console.log(numbers4);

// no indexing based available
// we can write any iterable inside the paranthesis
const numbers5 =new Set([1,3,2])  
console.log(numbers5[3]);


const str=new Set("harsh")
console.log(str)


const num=new Set();
num.add(1);   // to add elements in the set
num.add(12);
num.add(14);
num.add(['item1','item2']);
num.add(['item1','item2']);
if(num.has(1)){
    console.log("1 is present")
}
else{
    console.log("1 is not present")
}

console.log(num)

//______________________________________________-

const myArray=[1,2,4,4,5,6];

const uniqueEle=new Set(myArray);

let length=0;
// for of loop
for(let element of uniqueEle){
    length++;
}

console.log(uniqueEle)
console.log(length)

