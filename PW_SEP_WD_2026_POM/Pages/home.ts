import { PWWrapper } from "../helper/playwrightWrapper";
//import { WelcomePage } from "./welcome";
import { selectors } from "./locators";

export class HomePage extends PWWrapper{


    async clickonLeadsButton(){

        //await this.page.locator('//a[text()="Leads"]').click()
        //await this.click('//a[text()="Leads"]')
        await this.click(selectors.Leads.clickonLeads)


    }
}