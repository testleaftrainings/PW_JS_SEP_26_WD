"use strict";
//type Alias-> used to create the custom type
//1. type union(|) - either one or more
//2. type intersection(&)- 
let logincredentials;
logincredentials = "username";
logincredentials = 57801275578;
//logincredentials=true  
console.log(logincredentials); //57801275578
let inputlogin;
inputlogin = "welcome";
inputlogin = 1234;
inputlogin = true;
inputlogin = undefined;
console.log(inputlogin); //undefined
function invokeBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("launch client specific browser", browserName);
    }
    else if (browserName === "firefox") {
        console.log("launch client specific browser", browserName);
        /* }else if(browserName==="msedge"){
         
            console.log("launch client specific browser",browserName);
        
        } */
    }
    else {
        console.log("invalid browser", browserName);
    }
}
invokeBrowser("firefox");
invokeBrowser("msedge");
//invokeBrowser("safari")
