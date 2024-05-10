// classes id href are attrubutes (green color things are attribute)

const link=document.querySelector('a')
console.log(link)

console.log(link.getAttribute("href")) // it will us attribute 
// as here we are getting hash also, to remove this hash we can use slice method
console.log(link.getAttribute("href").slice(1)) // it will us attribute 
const inputElement=document.querySelector(".form-todo input")
console.log(inputElement.getAttribute("type"))


// now changing the text
link.setAttribute("href", "https://codeprog.com");
console.log(link.getAttribute("href"))