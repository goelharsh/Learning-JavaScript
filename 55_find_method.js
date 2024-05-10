// // find method

// const myarray=["hello", "cat", "dog", "lion"];

// function isLength3(string){
//     return string.length ===3;
// }
// const ans=isLength3("dog");
// console.log(ans)




// myarray.find(isLength3);
// // jaise hi isko first occururance milegi us string ki jiski length 3 hai, ye usko return krdega
// const ans2=myarray.find(isLength3);
// console.log(ans2)



//__________________________________

const users=[
    {userID: 1, userName:"harsh"},
    {userID: 2, userName:"paras"},
    {userID: 3, userName:"dhruv"},
    {userID: 4, userName:"shivam"},
]

const ans=users.find((user)=>user.userID===3);

console.log(ans)