import {test} from "@playwright/test"
import { logadefect } from "./afterhooks"


test('Leaftaps login issue creation in Jira',async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")

await page.locator('input').first().fill('democsr')

await page.locator('input').nth(1).fill('crmsfa')

await page.locator('input').nth(2).click()

})

test.afterAll(async({},testinfo)=>{

//console.log(testinfo.error);
await logadefect(testinfo)

})