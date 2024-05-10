// const firstButton=document.querySelector("#one");
// firstButton.addEventListener("click", function(){
//     console.log(this)
// })     // agr first button pe click krenge tabhi kuch hoga



//___________________________________________


// In case of arrow function
// const firstButton=document.querySelector("#one");
// firstButton.addEventListener("click", ()=>{
    // console.log(this)
// })     // but arrow fun ke case me kych nhi hoga keuki window objet wala system hai

//_____________________________________________


// jab bhi me kisi element pe event listener add hoga
// js-engine --> line by line code ko execute krta hai
// browser --> js engine + webapi
// browser---> js engine + extra features
// to jo browser hota hai na vo najr rkhega ki kab user ne  button pe click kra hai


// jab browser ko pta chla user ne event perform kia jo ki hum listen kr rhe the 
// to browser do kaam krega
// 1.   jo callback funciton hai vo javasript engine ko dega
// 2.   callback funciton ke sath vo jo event hua hai uski information bhi dega

// or informaion hme object ki form me milegi

// const firstButton=document.querySelector("#one");
// firstButton.addEventListener("click", function(abc){
//     console.log(abc)
// }); 


// function hello(abc){    f// abc is like an object
//     console.log(abc);
// }

// hello({firstkey:"value1", secodkey:"values2"});

//______________________________________________________

const firstButton=document.querySelector("#one");

const allButtons=document.querySelector(".my-buttons button");

for(let button of allButtons){
    button.addEventListener("click", (e)=>{
        console.log(e.CurrentTarget)
    })
}




// event behinf the scene wali video maine skip kr di hai