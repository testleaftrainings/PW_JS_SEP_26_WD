import {test} from "@playwright/test"

import {parse} from "csv-parse/sync"

import fs from 'fs'

import path from 'path'

//relative path
// let value=fs.readFileSync('Data/sflogin.csv')
// console.log(value);

/* without utf-8, buffer data is read as binaries
 <Buffer 74 63 69 64 2c 75 73 65 72 6e 61 6d 65 2c 70 61 73 73 77 6f 72 64 0d 0a 74 63 30 30 31 2c 64 69 6c 69 70 6b 75 6d 61 72 2e 72 61 6a 65 6e 64 72 61 6e ... 70 more bytes> */


 /* with UTF(Unicode Transformation Format-encoding format) reads the data as string
 let value=fs.readFileSync('Data/sflogin.csv','utf-8')
console.log(value);
 */
 /* csv data with encoded format
 tcid,username,password
tc001,dilipkumar.rajendran@testleaf.com,TestLeaf@2025
tc002,gauthami.vn@testleaf.com,Qeagle@123 */


//parse the csv data to object format
let value:any[]=parse(fs.readFileSync('Data/sflogin.csv','utf-8'),{columns:true,skip_empty_lines:true})
//console.log(value);

/* [
  {
    tcid: 'tc001',
    username: 'dilipkumar.rajendran@testleaf.com',
    password: 'TestLeaf@2025'
  },
  {
    tcid: 'tc002',
    username: 'gauthami.vn@testleaf.com',
    password: 'Qeagle@123'
  }
] */
//console.log(typeof value);//object

test.describe.serial('run test in serial mode', async()=>{

for(let details of value){

test(`learn to read data from csv file ${details.tcid}`,async ({page}) => {

await page.goto('https://login.salesforce.com/')

await page.locator('#username').fill(details.username)

await page.locator('#Login').click()

await page.locator("#password").fill(details.password)

await page.locator('#Login').click()

    
})

}

})
