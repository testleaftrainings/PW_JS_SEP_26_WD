import {test, expect} from "@playwright/test"

test("learn frames", async ({page}) => {

await page.goto('https://www.leafground.com/frame.xhtml')

//handling frames using frameLocator

//single line of code

//await page.frameLocator('[src="default.xhtml"]').locator('#Click').click()

//store the frame reference in a variable and do the click action

let singleframeRef=page.frameLocator('[src="default.xhtml"]')

//message before click action

let beforeclick=await singleframeRef.locator('#Click').innerText()
console.log(beforeclick);//Click Me

//click action

await singleframeRef.locator('#Click').click()

//message after click action
let afterclick=await singleframeRef.locator('#Click').innerText()
console.log(afterclick);//Hurray! You Clicked Me.

//verify using Non-retry assertion/generic assertion

expect(afterclick).toBe("Hurray! You Clicked Me.")

//retry assertion

await expect(singleframeRef.locator('#Click')).toContainText("Hurray!")
await expect(singleframeRef.locator('#Click')).toHaveText("Hurray! You Clicked Me.")

})

//Classroom Activity: Handle the nested frame
//locate the outerframe-> locate the innerframe->locate the element for button->click()