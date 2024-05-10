function myApp(){
    const myVar = "value1";
    function myfunc(){
        const myVar="value56";
        const myfunc2 = ()=>{
            console.log("inside myfunc",myVar)
        }
        myfunc2()
    }
    
    const myfunc3 = ()=>{}
    console.log(myVar);
    myfunc()
}
myApp();