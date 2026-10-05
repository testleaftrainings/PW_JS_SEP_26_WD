import { BasePage } from "./methodOverriding";

class Admin extends BasePage{

    login() {
        //console.log("login with Admin credentails");
        super.login()
        
    }
}

let ad=new Admin()
ad.login()