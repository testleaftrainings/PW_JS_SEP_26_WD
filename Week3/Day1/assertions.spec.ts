import {expect, test} from "@playwright/test"

test('Learn assertions in playwright', async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")

const Title=await page.title()
console.log(Title);//Leaftaps - TestLeaf Automation Platform
const Url=page.url()
console.log(Url);//https://leaftaps.com/opentaps/control/main

//retry assertion or locator based assertion
await expect(page).toHaveURL('https://leaftaps.com/opentaps/control/main')
//await expect(page).toHaveTitle(' TestLeaf Automation Platform')  //fails
//await expect.soft(page).toHaveTitle(' TestLeaf Automation Platform')  //works

/* Non retry assertion or Generic assertion

By default (Hard or Normal assertion)
If the title doesn't match, the test fails immediately.
The remaining lines will NOT be executed. */

//expect(Title).toBe('TestLeaf Automation Platform')  //fails due to title mismatch


/* Soft Assertion
If the title doesn't match, the assertion is recorded as failed,
but the test continues executing the remaining lines of code. */

expect.soft(Title).toBe('TestLeaf Automation Platform') //continue to execute all the line of codes
expect(Url).toContain('//leaftaps.com/opentaps/control/main')

console.log("Assertion completed successfully");

//locator or retry assertion
await expect(page.locator('//input[@id="username"]')).toBeVisible()

//locator assertion using variable reference
const pwd=page.locator('//input[@name="PASSWORD"]')
await expect(pwd).toBeEditable()
await expect(pwd).toBeEnabled()
await expect(pwd).toBeEmpty()

//Assertion timeout(default-5s or 5000ms), when the assertion fails- it retries for 2s
await expect(pwd).toBeHidden({timeout:2000})


//Acion timeout-no default timeout
await page.locator("#username").fill('democsr',{timeout:5000})

    
})