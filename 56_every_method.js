// const numbers=[2,4,6,8,10];

// function isEven(number){
//     return number%2===0;
// }

// const ans2=numbers.every(isEven)

// const ans=numbers.every((number)=>number%2===0);
// console.log(ans2)


const userCart=[
    {prodID:'1',prodName:"harsh",price:10000},
    {prodID:'2',prodName:"dhruv",price:4000},
    {prodID:'3',prodName:"paras",price:12000},
    {prodID:'4',prodName:"shivam",price:15000},
]
// kya sabhi cart item ka price 3000 se kam hai
const ans=userCart.every((cartItem)=>cartItem.price<30000);
console.log(ans)