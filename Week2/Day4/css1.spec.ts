import {test} from "@playwright/test"

//custom view port
/*   test.use({
    viewport:{width:1020, height:800}
}) */

test('learn css relationship based selectors',async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")

//await page.locator('input').nth(0).fill('democsr')
await page.locator('label+input').first().fill('democsr')

//await page.locator('p>label').nth(1).fill('crmsfa')
await page.locator('p~p label').fill('crmsfa')
await page.locator('p input').nth(2).click()



//nth method-playwright
//.first()->nth(0)->first match
//nth(1)-second match
//.last()->nth(n)->last match



})
