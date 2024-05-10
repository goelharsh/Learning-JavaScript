// ek button hoga or us button ko click krte hi sare bg color change ho jayega



// Math.random()   // ye function hme 0 se 9 ke bih me koi bhi random number deta hai
// Math.random() * 256  // ab ye fucnion hme o se 255 ke bich ki random value dega

// Math.floor(Math.random()*256)   // ab ye funcion hme float value ki bjaye int values dega
 //_____________________________________________________

// const mainButton=document.querySelector("button");
// // console.log(mainButton)
// const body= document.body;


// function randomColorGenerator(){
//     const red=Math.floor(Math.random() * 256);
//     const green=Math.floor(Math.random() * 256);
//     const blue=Math.floor(Math.random() * 256);
//     const randomColor=`rgb(${red},${green},${blue})`
//     return randomColor;
// }

// mainButton.addEventListener("click",()=>{
//     // console.log("You clicked me");
//     const randomColor= randomColorGenerator()
//     console.log(randomColor)

// })



//_______________________________________________





const mainButton=document.querySelector("button");
// console.log(mainButton)
const body= document.body;
const CurrentColor=document.querySelector(".CurrentColor")
// console.log(CurrentColor)

function randomColorGenerator(){
    const red=Math.floor(Math.random() * 256);
    const green=Math.floor(Math.random() * 256);
    const blue=Math.floor(Math.random() * 256);
    const randomColor=`rgb(${red},${green},${blue})`
    return randomColor;
}

mainButton.addEventListener("click",()=>{
    // console.log("You clicked me");
    const randomColor= randomColorGenerator()
    body.style.backgroundColor=randomColor
    CurrentColor.textContent=randomColor
    console.log(randomColor)

})