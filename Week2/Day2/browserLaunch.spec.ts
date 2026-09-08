/* 
browser-> Actual browser engine (Chromium, Firefox, WebKit)
context->Isolated environment like an incognito session
page->A single tab within a context  */

import {test,chromium} from "@playwright/test"

//Launch browser using browser, context, and page

/* test('learn to launch the browser',async () => {

const browser=await chromium.launch({headless:false}) //browser
const context=await browser.newContext()              //context
const page=await context.newPage()                    //page

await page.goto("https://www.amazon.in/")             //method to load the url


}) */


//Launch browser using page fixture

/* Page fixture is a built-in Playwright fixture that provides a ready-to-use browser page for each test.*/

test('learn to launch the browser',async ({page}) => {

await page.goto("https://www.amazon.in/")


})