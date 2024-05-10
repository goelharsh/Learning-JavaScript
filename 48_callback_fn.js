function myfunc2(name){
    console.log("inside my func2");
    console.log(`your name is ${name}`)
}
function myfunc(callback){
      console.log("hello there");
// yha per a ki value pura ka pura funcion daliya hai
    callback()
}



myfunc(myfunc2)