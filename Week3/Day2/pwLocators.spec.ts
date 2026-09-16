import {test,expect} from "@playwright/test"

test("Learn playwright locators", async ({page}) => {

await page.goto("https://login.salesforce.com/")

await expect(page.getByAltText("Salesforce login")).toBeVisible()

/* https://login.salesforce.com/?locale=in
Sample credentials :
Username:dilipkumar.rajendran@testleaf.com
Password: TestLeaf@2025 */

await page.getByRole('textbox',{name:"username"}).fill('dilipkumar.rajendran@testleaf.com')

await page.getByRole('button',{name:"Log In"}).click()

//await page.getByRole('textbox').fill('TestLeaf@2025')

//await page.getByLabel('Password').fill("TestLeaf@2025")

await page.locator('label').filter({hasText:"Password"}).fill('TestLeaf@2025')

await page.getByRole('button',{name:"Log In"}).click()

await page.getByTitle('App Launcher').click()  //or nth(0)

//await page.getByRole('button',{name:"View All Applications"}).click()

//await page.getByText('View All',{exact:true}).nth(6).click()
await page.locator('[aria-label="View All Applications"]').filter({hasText:"View All"}).click()

await page.getByPlaceholder('Search apps or items...').fill('Accounts')


//await page.getByTestId('').click()

})


    
