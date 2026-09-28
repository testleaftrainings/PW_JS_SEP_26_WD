import {test} from "@playwright/test"


import data from "../../../Data/login.json"

// console.log(data[0].username);//democsr
// console.log(data[0].password);//crmsfa

test.describe.serial('run test in serial mode', async()=>{

for(let credentials of data){

test(`learn to read data from JSON file ${credentials.tcid}`,async ({page}) => {
//for(let i=0;i<length;i++){}

await page.goto("https://leaftaps.com/opentaps/control/main")

await page.locator('#username').fill(credentials.username)
await page.locator('#password').fill(credentials.password)
await page.locator('.decorativeSubmit').click()
   
})

}

})