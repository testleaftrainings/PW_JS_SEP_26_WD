//reads system environment variables
//console.log(process.env.username);//admin

import {test} from "@playwright/test"

import dotenv from 'dotenv'

//switch between different environments

let filename=process.env.envfile || "prod" || 'qa' 

dotenv.config({path:`Data/${filename}.env`})

//envfile=user defined variable to set the environment in the terminal

//read single data from the env file
// dotenv.config({path:'Data/qa.env'})

// console.log(process.env.lf_url); //https://leaftaps.com/opentaps/control/main
// console.log(process.env.lf_username);//democsr2
// console.log(process.env.lf_password);//crmsfa

let URL=process.env.lf_url as string
let Username=process.env.lf_username as string
let Password=process.env.lf_password as string

test('learn to read data from env file', async ({page}) => {

    //await page.goto(process.env.lf_url as string)
    //await page.goto(<string>process.env.lf_url)
    //await page.goto(process.env.lf_url!)
    
await page.goto(URL)
await page.locator('#username').fill(Username)
await page.locator('#password').fill(Password)
await page.locator('.decorativeSubmit').click()
    
})
