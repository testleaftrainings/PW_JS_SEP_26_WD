import { Parent } from "./parent";

class Child extends Parent{

    createLead(){

        console.log("lead is created");
        
    }
}

let ch=new Child()
ch.loadurl()
ch.loginInfo()
ch.createLead()
ch.launchBrowser()