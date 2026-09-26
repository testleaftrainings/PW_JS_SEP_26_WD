import {test,expect} from "@playwright/test"

import path from 'path'

test('to upload file using input<type="file">',async ({page}) => {


await page.goto('https://www.leafground.com/file.xhtml')

let fupload=page.locator('(//input[@type="file"])[1]')

await fupload.setInputFiles('Data/Qeagle.png')

let fuploadassertion=await page.locator('[class="ui-fileupload-filename"]').innerText()
console.log(fuploadassertion);//Qeagle.png 40.2 KB


//Retry assertion
await expect(page.locator('[class="ui-fileupload-filename"]')).toContainText('Qeagle.png 40.2 KB')

  
})


test.only('to upload file using event listener',async ({page}) => {


await page.goto('https://the-internet.herokuapp.com/upload')

//create the event listener

let fileupref=page.waitForEvent('filechooser')

//trigger the click action

await page.locator('[id="drag-drop-upload"]').click()

//resolve the promise of event listener

const upload=await fileupref


//relative path
//await upload.setFiles('Data/TestLeaf Logo.png')


//absolute path

await upload.setFiles(path.join(__dirname,'../../../Data/Qeagle.png'))
console.log(__dirname)//C:\Users\admin\OneDrive - TestLeaf Software Solutions Private Limited\Documents\Playwright\PW_SEP_WD_2026\tests\Week4\Day4


//retry assertion

await expect(page.locator('//span[text()="Qeagle.png"]')).toHaveText('Qeagle.png')


})