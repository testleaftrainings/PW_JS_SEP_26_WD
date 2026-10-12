import {expect} from "@playwright/test"
//import { CreateLead } from "./createLead";
import { PWWrapper } from "../helper/playwrightWrapper";


export class ViewLead extends PWWrapper{

async verifyLead(expcompanyName:string,expfirstName:string,explastName:string){


//Actual values

let companyName=await this.page.locator('[id="viewLead_companyName_sp"]').innerText()
console.log(companyName)

let firstName=await this.page.locator('[id="viewLead_firstName_sp"]').innerText()
console.log(firstName)

let lastName=await this.page.locator('[id="viewLead_lastName_sp"]').innerText()
console.log(lastName)



//expected values
console.log(expcompanyName);
console.log(expfirstName);
console.log(explastName);



//Non-retry assertion

//expect(firstName).toBe('Naveen')
expect(companyName).toContain(expcompanyName)
expect(firstName).toBe(expfirstName)
expect(lastName).toBe(explastName)


//retry assertion


//exact match
//await expect(this.page.locator('[id="viewLead_firstName_sp"]')).toHaveText('Naveen')
await expect(this.page.locator('[id="viewLead_companyName_sp"]')).toContainText(expcompanyName)
await expect(this.page.locator('[id="viewLead_firstName_sp"]')).toHaveText(expfirstName)
await expect(this.page.locator('[id="viewLead_lastName_sp"]')).toHaveText(explastName)


//partial match
//await expect(this.page.locator('[id="viewLead_firstName_sp"]')).toContainText('Naveen')
await expect(this.page.locator('[id="viewLead_companyName_sp"]')).toContainText(expcompanyName)
await expect(this.page.locator('[id="viewLead_firstName_sp"]')).toContainText(expfirstName)
await expect(this.page.locator('[id="viewLead_lastName_sp"]')).toContainText(explastName)

}


}