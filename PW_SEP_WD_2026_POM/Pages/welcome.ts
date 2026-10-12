import { PWWrapper } from "../helper/playwrightWrapper";
//import { LoginPage } from "./login";
import { selectors } from "./locators";


export class WelcomePage extends PWWrapper {

async clickonCRMSFA(){
//await this.page.locator('text=CRM/SFA').click()
//await this.click('text=CRM/SFA')
await this.click(selectors.clickonCRM_SFA)

}

async logout(){

//await this.page.locator('.decorativeSubmit').click()
//await this.click('.decorativeSubmit')
await this.click(selectors.clickonLogout)

}



}