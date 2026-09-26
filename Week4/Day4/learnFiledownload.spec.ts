import {test,expect} from "@playwright/test"

import path from 'path'

import fs from 'fs'

test('to upload file using input<type="file">',async ({page}) => {

await page.goto('https://www.leafground.com/file.xhtml')

//register the event listener

let downref=page.waitForEvent('download')

//trigger the click action

await page.locator('//span[text()="Download"]').click()

//resolve the listener promise and store the download ref
const fdown=await downref

// using the refernece fdown save the file (absolute path)
await fdown.saveAs(path.join(__dirname,'../../../Data/test.jpeg'))

//relative path
//await fdown.saveAs('Utils/test1.jpeg')

//save with suggested filename

await fdown.saveAs(`Utils/${fdown.suggestedFilename()}`)//browser suggested name

//to verify the download

expect (fdown).toBeTruthy()

//verify the filename

expect (fdown.suggestedFilename()).toContain('TestLeaf')

//verify the file exits in the path 

const customfilePath='Utils/TestLeaf Logo.png'
expect(fs.existsSync(customfilePath)).toBeTruthy()

})