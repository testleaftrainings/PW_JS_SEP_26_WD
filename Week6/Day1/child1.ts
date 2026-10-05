import { Parent } from "./parent";

class Child1 extends Parent{

    createAccount(){

        console.log("Account is created");
        
    }
}

let ch1=new Child1()
ch1.loadurl()
ch1.loginInfo()
ch1.createAccount()
ch1.launchBrowser()
