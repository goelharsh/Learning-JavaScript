// const myarray= new Array(10).fill(-1);
// console.log(myarray)



// const myarray2= [1,2,35,6,7,,4,5,6,7];
// myarray2.fill(0,2,8);
// console.log(myarray2);  // uper wale array ko 2 se 8 index me o fill krdo




// splice method
// Start,delete,insert
// to delete some elements from the array

// const myArray3=['item1', 'item2', 'item3','item4']
// const ans3=myArray3.splice(1,2)
// const ans4=myArray3.splice(1,0,"inserted item");
// console.log(myArray3)




// insert or delete dono ek sath
const myArray3=['item1', 'item2', 'item3','item4']
const deletedItem=myArray3.splice(1,2,"inserted itemno1", "inserted itemno2");
console.log(deletedItem)
console.log(myArray3)