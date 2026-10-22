import {test,devices} from "@playwright/test"

test.use({

    ...devices['Galaxy S5']

})

test('Amazon login',async ({page}) => {

await page.goto('https://www.amazon.in/')
await page.waitForTimeout(4000)
    
})