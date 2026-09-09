
import {test} from "@playwright/test"

test('learn css selectors',async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")

await page.locator('[id="username"]').fill('democsr')

await page.locator('#password').fill('crmsfa')

await page.locator('.decorativeSubmit').click()

await page.locator('text=CRM/SFA').click()
await page.waitForLoadState('domcontentloaded')

let pageTitle= await page.title()
console.log(pageTitle);

let pageUrl= page.url()
console.log(pageUrl);
   
})