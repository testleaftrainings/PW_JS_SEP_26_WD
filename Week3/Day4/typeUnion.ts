//type Alias-> used to create the custom type using inbuilt types

//1. type union(|) - allows a variable to hold one of multiple specified types
//2. type intersection(&)- combines multiple type into one requiring all properties from every type


//union with inbuilt datatype

let logincredentials:string | number
logincredentials="username"
logincredentials=57801275578
//logincredentials=true  
console.log(logincredentials);//57801275578


//type union with custom datatype

type customdatatype=string | number | boolean | undefined 
let inputlogin:customdatatype
inputlogin="welcome"
inputlogin=1234
inputlogin=true
inputlogin=undefined
console.log(inputlogin);//undefined


//type union to restrict browsers 

type Browser="chrome" | "msedge" | "firefox"

function invokeBrowser(browserName:Browser){

if (browserName==="chrome"){

    console.log("launch client specific browser",browserName);
    
}else if(browserName==="firefox"){
 
    console.log("launch client specific browser",browserName);

}else{

    console.log("invalid browser",browserName);
}

}

invokeBrowser("firefox")  //launch client specific browser firefox
invokeBrowser("msedge") //invalid Browser

//invokeBrowser("safari") //safari is not assignable to type Browser


