import { PWWrapper } from "../helper/playwrightWrapper";
//import { LeadPage } from "./lead";
import { faker } from "@faker-js/faker"
import { selectors } from "./locators";


export class CreateLead extends PWWrapper{

//async enterManditoryFields(cname:string,fname:string,lname:string){
async enterManditoryFields(){

let cName=faker.company.name()
//await this.page.locator('[id="createLeadForm_companyName"]').fill('Infosys')
//await this.page.locator('[id="createLeadForm_companyName"]').fill(cname)
// await this.clearAndFill('[id="createLeadForm_companyName"]',cname)
//await this.clearAndFill('[id="createLeadForm_companyName"]',cName)
await this.clearAndFill(selectors.Leads.companyName,cName)

let fName=faker.person.firstName()
//await this.page.locator('[id="createLeadForm_firstName"]').fill('Naveen')
//await this.page.locator('[id="createLeadForm_firstName"]').fill(fname)
//await this.clearAndFill('[id="createLeadForm_firstName"]',fName)
await this.clearAndFill(selectors.Leads.firstName,fName)

let lName=faker.person.lastName()
//await this.page.locator('input[id="createLeadForm_lastName"]').fill('Kumar')
//await this.page.locator('input[id="createLeadForm_lastName"]').fill(lname)
//await this.clearAndFill('input[id="createLeadForm_lastName"]',lName)
await this.clearAndFill(selectors.Leads.lastName,lName)

 
return [cName,fName,lName]


}

async clickonCreateLeadSubmitButton(){

//await this.page.locator('.smallSubmit').click()
await this.click('.smallSubmit')
}


    
}