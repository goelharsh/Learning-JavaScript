const numbers=[3,44,5,6,7];


// kya ek ki bhi number aise hai jo even hai 
// true;

const ans=numbers.some((number)=>number%2===0);
console.log(ans);

const userCart=[
    {prodID:'1',prodName:"harsh",price:10000},
    {prodID:'2',prodName:"dhruv",price:4000},
    {prodID:'3',prodName:"paras",price:12000},
    {prodID:'4',prodName:"shivam",price:15000},
]

const ans2=userCart.some((cartItem)=>cartItem.price<40000)
console.log(ans2)