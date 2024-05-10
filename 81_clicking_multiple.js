// const firstButton=document.querySelector("#one");
// firstButton.addEventListener("click",function(){
//     console.log("You clicked me")
// })


//________________________________________

// but for doing this with all three buttons

// const allButton=document.querySelectorAll("button");
// console.log(allButton)
// firstButton.addEventListener("click",function(){
// console.log("You clicked me")
// })
    
    
//__________________________________________
// loop lgake bhi button select kr skte 
    
// const allButton=document.querySelectorAll(".my-buttons button");

// for(let button of allButton){
//     button.addEventListener("click",function(){
//         console.log("You clicked me")  // ab agr hum koi bhi button dbayenge to you ckicked me likh ayegas
//     })
// }


//______________________________________________


// const allButton=document.querySelectorAll(".my-buttons button");

// for(let button of allButton){
//     button.addEventListener("click",function(){
//         console.log(this)  
//     })
// }


//_____________________________________



// const allButton=document.querySelectorAll(".my-buttons button");

// for(let button of allButton){
//     button.addEventListener("click",function(){
//         console.dir(this)  
//     })
// }


//__________________________________________



// const allButton=document.querySelectorAll(".my-buttons button");

// for(let button of allButton){
//     button.addEventListener("click",function(){
//         console.log(this.textContent)   // to get only the content of the buttons 
//     })
// }


//______________________________________

// lekin agr hum yha arrow fucntion bna dete hain to problem ho jayegi



// const allButton=document.querySelectorAll(".my-buttons button");

// for(let button of allButton){
//     button.addEventListener("click",()=>{
//         console.log(this.textContent)    // bcoz arrow fucnion ke pass window hoga or window ke pass koi textcontent nhi hai
//     })
// }

//_____________________________________________

const allButtons=document.querySelectorAll(".my-buttons button");


// for(let i=0;i<allButtons.length;i++){
//     allButtons[i].addEventListener("click",function(){
//         console.log(this);
//     })
// }

allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log("You clickd me")
    })
})


//_________________________________________