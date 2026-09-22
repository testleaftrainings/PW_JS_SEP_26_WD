import {test,expect} from "@playwright/test"

test("learn frames", async ({page}) => {

await page.goto('https://www.leafground.com/frame.xhtml')

//store the reference of the frame and do the click action
let fr=page.frame({url:"https://www.leafground.com/default.xhtml"})

//print the text before click action

let bclick=await fr?.locator('#Click').innerText()
console.log(bclick);

//click action

await fr?.locator('#Click').click()

//print the text after click action

let Aclick=await fr?.locator('#Click').innerText()
console.log(Aclick);

//single line of code

//await page.frame({url:"https://www.leafground.com/default.xhtml"})?.locator('#Click').click()

//retry assertion
await expect(fr!.locator('#Click')).toContainText("Hurray! You Clicked Me.")

//non retry assertion
expect(Aclick).toBe("Hurray! You Clicked Me.")


//nested frame using frameObjects

await page.frame({name:"frame2"})?.locator('#Click').click()

})