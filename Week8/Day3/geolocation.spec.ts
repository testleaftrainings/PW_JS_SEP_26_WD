import {test} from "@playwright/test"

test.use({

    geolocation:{latitude:37.1598795,longitude:-124.6107287},
    permissions:['geolocation']
})


test('geolcation mocking',async ({page}) => {


await page.goto('https://www.google.com/maps/')

let gmapview=page.locator('.mNcDk.google-symbols.NhBTye')
await gmapview.scrollIntoViewIfNeeded()
await page.waitForTimeout(2000)
await gmapview.click()

await page.screenshot({path:"california.jpeg"})
   
})