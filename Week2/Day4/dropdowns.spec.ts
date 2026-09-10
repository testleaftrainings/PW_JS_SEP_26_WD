import {test} from "@playwright/test"

test('learn select dropdowns', async ({page}) => {

await page.goto('https://www.leafground.com/select.xhtml')

//select dropdown

await page.locator('[class="ui-selectonemenu"]').selectOption({label:"Selenium"})
await page.locator('[class="ui-selectonemenu"]').selectOption({index:2})


//all dropdown values
let ddvalues=page.locator('[class="ui-selectonemenu"]>option')

//dropdown count
let ddcount=await ddvalues.count()
console.log(ddcount);

//for loop -> used for iteration

for (let index = 0; index < ddcount; index++) {
    
console.log(await ddvalues.nth(index).innerText());

}
 
})

// custom dropdown

test.only('learn to handle custom dropdowns', async ({page}) => {

await page.goto('https://www.leafground.com/select.xhtml')

//selecting the dropdown
await page.locator('text=Select Country').nth(1).click()

//select the desired option from the dropdown

await page.locator('[data-label="India"]').click()

})