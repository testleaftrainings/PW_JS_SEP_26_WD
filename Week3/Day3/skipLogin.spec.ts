import {test} from "@playwright/test"


/* test.use(
    {
       storageState:'Data/sflogin.json' 
    }
) */

test('auth file to skip the login', async ({page}) => {

//await page.goto("https://login.salesforce.com/")
await page.goto("https://orgfarm-6d28dcc693-dev-ed.develop.lightning.force.com/lightning/page/home")

await page.waitForLoadState('domcontentloaded')

console.log(await page.title());


})