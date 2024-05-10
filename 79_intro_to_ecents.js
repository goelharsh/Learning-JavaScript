// click
// event add krne ke 3 trike hain hmare pass

// first method
// jha hmara index.html page hai vha add krdo

// {/* <button class="btn btn-headline" onclick="console.log('You clicked me')">Learn More</button> */}    // ye code maine html file se copy kia hai sirf smjhne ke liye
//__________________________________________________


// second method

// const btn=document.querySelector(".btn-headline");
// console.dir(btn);
// btn.onclick=function(){
//     console.log("You clicked me");
// }


//_________________________________
// above two method are not gud for us

// we generally use 3rd method

// third method


const btn=document.querySelector(".btn-headline");
// method--- addEventListner

// function clickMe(){
//     console.log("You clicked me")
// }
// btn.addEventListener("click",clickMe);
//_____________________________________________

// but we dont need to write fucntion like this


// btn.addEventListener("click",function(){
//     console.log("You clicled me !!!")
// });

//_____________________________________________________
// we can also  use arrow fucitons

btn.addEventListener("click", ()=>{
    console.log("You clicked me")
});
