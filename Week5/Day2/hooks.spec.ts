
import {test} from "@playwright/test"

import {parse} from "csv-parse/sync"

import fs from 'fs'

//global scoped variable

let value:any[]

test.describe.serial('runs the test in serial mode', async () => {
    

//data connectivity

test.beforeAll('data connectivity', async () => {
console.log("Runs before all the test");
value=parse(fs.readFileSync('Data/leaf.csv','utf-8'),{columns:true,skip_empty_lines:true})
  
})


//login functionality

test.beforeEach('login functionality', async ({page}) => {
console.log("Runs before each and every test");
await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill(value[0].username)
await page.locator('#password').fill(value[0].password)
await page.locator('.decorativeSubmit').click()
await page.locator('text=CRM/SFA').click()

    
})


//create lead

test('create lead module', async ({page}) => {
console.log("create lead ");
await page.locator('//a[text()="Leads"]').click()
   
})


//create Account

test('create Account module', async ({page}) => {
console.log("create Account ");
await page.locator('//a[text()="Accounts"]').click()
   
})


//test result and status

test.afterEach('print the test report', async ({},testinfo) => {
console.log('result for each and every test');
console.log(testinfo.status)
console.log(testinfo.title);
  
})


//close the data connection and browser

test.afterAll('close the data connections', async () => {
console.log("Runs after all the test");
    
    
})

})
