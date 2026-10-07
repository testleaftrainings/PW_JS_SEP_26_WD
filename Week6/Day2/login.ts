/* loadurl()
enter the username
enter the password
click on login
 */

import { chromium,Page,Browser } from "@playwright/test"


class LoginPage{

  //global  property

  page:Page
  browser:Browser

    constructor(tpage:Page,tbrowser:Browser){

    this.page=tpage
    this.browser=tbrowser
    }


   async loadUrl(url:string){

    await this.page.goto(url)

   } 


   async loginCredentials(username:string,password:string){

    await this.page.locator('#username').fill(username)
    await this.page.locator('#password').fill(password)

    }


   async clickonLogin(){

    await this.page.locator('.decorativeSubmit').click()


    }

    async closeBrowser(){

        await this.page.close()
        //await this.browser.close()
    }

}

//browser instance
async function doLogin(){

let browser=await chromium.launch({headless:false})
let context=await browser.newContext()
let page=await context.newPage()


let lp=new LoginPage(page,browser)
await lp.loadUrl("https://leaftaps.com/opentaps/control/main")
await lp.loginCredentials("democsr2","crmsfa")
await lp.clickonLogin()
await lp.closeBrowser()


}

doLogin()