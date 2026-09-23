/* 
chromium.lauch()
browser.newContext()
context.newPage()
await page.goto()

*/

import {test} from "@playwright/test"

test("Learn window handling in playwright", async ({page,context}) => {


await page.goto('https://www.amazon.in/')

//storing the reference of search box

let sBox=page.locator('[id="twotabsearchtextbox"]')

await sBox.fill('iphone')

await sBox.press('Enter')

//register the event listener and create the promise 

let pagePromise=context.waitForEvent('page')

//click action-triggering the new page

await page.locator('(//span[contains(text(),"iPhone 17 256 GB: 15.93 cm")])[1]').click()

//resolve the promise and capture the new page 

let childPage=await pagePromise

 //print the title of the child page

 await childPage.waitForLoadState('domcontentloaded')

 let childTitle=await childPage.title()
console.log(childTitle);

//print the price of the mobile

// let price= await childPage.locator('(//span[contains(text(),"iPhone 17 256 GB: 15.93 cm")])[5]').innerText()
let price= await childPage.locator('[class="a-price-whole"]').nth(4).innerText()
console.log("the price of the iphone is",price);

//print the title of the main page

 let pageTitle=await page.title()
console.log(pageTitle);

//use page.bringToFront() to change the focus to main page

await page.bringToFront()

await page.locator('//a[text()=" Electronics "]').click()

await page.waitForTimeout(2000)

    
})