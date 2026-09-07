//named function 

function greet(){

    console.log("learn functions");
    //return "learn functions"
    
}
greet()

//console.log(greet());
 

//function expression or anonymous function


let welcome=function (){
    console.log("its a function expression");
    
}
welcome()


//arrow function => shorter syntax

let add=(a,b)=>a+b
console.log(add(3,4))



//callback function- when we pass 1 function as an argument to another function we call it as callback


function login(cb1,cb2){

    console.log("login was successful");
    cb1()
    cb2()
    
}

function enterUsername(){

    console.log("entered username ");
    
}

function enterPassword(){

    console.log("entered password");
    
}
login(enterUsername,enterPassword)



