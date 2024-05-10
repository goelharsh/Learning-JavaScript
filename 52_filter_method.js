const numbers=[1,2,3,4,5,6];

const isEven= function(number){
    return number%2===0
}


// filter ka callback funciton fn hmesha ek boolean value return krega
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);