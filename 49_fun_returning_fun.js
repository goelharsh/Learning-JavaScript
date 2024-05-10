// function myfunc(){
//     return {name: "harsh", age:22};
// }
// const ans=myfunc();
// console.log(ans)
// __________________________________________



//funciotn returning function
// these fnctions are called as higher order funcitons

function myfunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}
const ans=myfunc();
console.log(ans)
console.log(ans());