// Ascii values





// sort()



// javascript ill sort numbers according to these ascii values

// numbers.sort()    // this function will change the orginial array

// javascript numbers ko as a number na sochke,  string samjhke sort krta hai
// const usernames=['harsh','paras', 'abcd','Nitish'];   // if capital letter are there then they will be sorted first bcoz capital letter has lesser ascii code than small letters
// usernames.sort()   // it will help us to sort names in dictionary order
// console.log(usernames)    


// const numbers=[5,9,1200,400,3000];

// '5'=53
// '9'=57
// '1'=49
// '4'=42
// '3'=51
// numbers.sort();

// numbers.sort((a,b)=>{
//     return a-b;          
// });

// numbers.sort((a,b)=>a-b);  // we can also write the above function like this
// console.log(numbers);

// 1200-410
// a-b ---> positive  (>0)   ,         (b,a)
// then do this -->  410,1200


// a-b  ----> negative 
// then do it like this   (a,b) 
 
// this is how sort method is working




//________________________________

// In amazon website
// price low to high  or high to low

const products=[
    {productId: 1, productName:"p1", price: 300},
    {productId: 2, productName:"p2", price: 3000},
    {productId: 3, productName:"p3", price: 200},
    {productId: 4, productName:"p4", price: 8000},
]

//lowtohigh
products.sort((a,b)=>{
    return a.price-b.price;
})
console.log(products)



const lowtohigh=products.slice(0).sort((a,b)=>{
    return a.price-b.price;
})
console.log(lowtohigh)

const hightolow=products.slice(0).sort((a,b)=>{
    return b.price-a.price;
})
console.log(hightolow)