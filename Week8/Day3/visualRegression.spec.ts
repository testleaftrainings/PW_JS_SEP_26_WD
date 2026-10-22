import {test,expect} from "@playwright/test"

test('google login page',async ({page}) => {

await page.goto('https://www.google.com/')

let snapshot=await page.screenshot({path:'g1.png'})

expect(snapshot).toMatchSnapshot('g1.png')
    
})