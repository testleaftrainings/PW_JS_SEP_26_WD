import {chromium, test} from "@playwright/test"


test('learn persistent context', async () => {

let userDataDir="./myDataDir"

let userContext= await chromium.launchPersistentContext(userDataDir,{

    headless:false,
    permissions:['notifications'],
    httpCredentials:{
        username:"admin",
        password:"testleaf"
    }
    })

    let page= await userContext.newPage()

    await page.goto('https://www.leafground.com/auth.xhtml')

    await page.locator('//span[text()="Basic Auth"]').click()

  
})