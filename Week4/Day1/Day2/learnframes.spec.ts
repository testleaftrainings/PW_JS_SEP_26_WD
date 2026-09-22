import {test} from "@playwright/test"

test("learn frames", async ({page}) => {

await page.goto('https://www.leafground.com/frame.xhtml')

/* let frameRef=page.frameLocator('[src="default.xhtml"]')

await frameRef.locator('(//button[@id="Click"])[1]').first().click() */

//page.frames() returns array of all the frames present in the page

let Allframes=page.frames()

//no. of frames present in the page

let framecount=Allframes.length
console.log(framecount) //5  mp(frame)->index 0, f1-> index 1, f2->index 2, f3-> index 3, f5->index 4 

//to print the title of the frames

for (let index = 0; index < framecount; index++) 
    {
    await page.waitForLoadState('domcontentloaded')
    console.log(Allframes[index].url()); 

/* https://www.leafground.com/frame.xhtml
https://www.leafground.com/default.xhtml
https://www.leafground.com/nested.xhtml
https://www.leafground.com/page.xhtml
https://www.leafground.com/framebutton.xhtml */
      
}

//frame interaction 

//using index

//click on single frame
let frame1=Allframes[1]

await frame1.locator('#Click').click()

//clicking on nested frame
const frame4=Allframes[4]

await frame4.locator('#Click').click()
await page.waitForTimeout(2000)
    
})