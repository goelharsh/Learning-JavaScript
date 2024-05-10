// to select any element from an object
// using getelementbyid



// console.log(document.getElementById("main-heading"));

// console.log(typeof document.getElementById("main-heading"));


//_______________________________________________


// const mainHeading=console.log(document.getElementById("main-heading"));
// console.log(mainHeading)


//____________________________________________

// select element using query selector

// const mainHeading = document.querySelector("#main-heading")
// console.log(mainHeading);

// const header = document.querySelector(".header")
// console.log(header);

// const navitem=document.querySelector(".nav-item");
// console.log(navitem)    // we will get only one nav item

// const navitemall=document.querySelectorAll(".nav-item");
// console.log(navitemall)    // we will get all nav item


//______________________________________________


// to select a text and change the text

// const mainHeading=document.getElementById("main-heading");    // here it is showing manage your tasks hello but in web page only 'Mange is task is there'  , this is bcoz we have the display of hello as none but in javascript hello will be shown 
// console.log(mainHeading.textContent)   // to get that what text is written

// mainHeading.textContent="This is something else";
// console.log(mainHeading.textContent)     // this is how to change text


//_____________________________________________

// inner text

// const mainHeading=document.getElementById("main-heading");  
// console.log(mainHeading.innerText) // inner text will only give the original web page text, i.e it will not show that hello
//________________________________________________-


//we can do this thing also
const mainHeading=document.querySelector("div.headline h2");  
console.log(mainHeading)
