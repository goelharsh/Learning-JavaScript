// map methods

const numbers = [6,5,7,4,3];

const square=function(number){
    return number*number   // it is imp that this method should return something becase map will always return something
 ;}
// map fun will always make/return a new array
const squarenumebr=numbers.map(square)

console.log(squarenumebr)


//_______________________________________

const squareNumber = numbers.map((number)=>{
    return number+number;
})
console.log(squareNumber)


//________________________________________


const users=[
    {firstname: "harsh", age:23},
    {firstname: "harsh", age:23},
    {firstname: "harsh", age:23}
]

const userNames=users.map((user)=>{
    return user.firstname
});
console.log(userNames)