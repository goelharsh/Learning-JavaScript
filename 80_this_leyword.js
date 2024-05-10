const bnt=document.querySelector(".btn-headline");


// agr hum simple fucntion bnaye to us case me this ki value same hi hogi
// agr fucntion ko bahr bnayenge to b yhi hoga
// bnt.addEventListener("click", function(){
//     console.log("You clicked me")
//     console.log("value of this");
//     console.log(this);
// })



//_______________________________________________



// In case of arrow function this ki value window object hoga
bnt.addEventListener("click", ()=>{
    console.log("You clicked me")
    console.log("value of this");
    console.log(this);
})


