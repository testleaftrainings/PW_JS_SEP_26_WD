
import {test} from "@playwright/test"

test.describe('Lead Management',{
    tag: '@crmlead'
}, ()=>{

test.describe.configure({mode:"parallel",retries:1})


    test.skip('create lead', async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/main')
    console.log("lead is created successfully");
    
    })


    test.only('Edit lead',{
    annotation: {
    type: 'Requirement',
    description: 'user story id: 23180',
    }
    }, async({page})=>{
    
    await test.step('lead is edited', async ()=>{
    await page.goto('https://leaftaps.com/opentaps/control/main')
    console.log("lead is Edited successfully");
    
    })

    })


     test.fixme(' Duplicate lead', async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/main')
    console.log("lead is duplicated successfully");
    
    })


   test.fail('delete lead', async({page})=>{
 
    //expect:fail , 
    await page.goto('https://leaftaps.com/opentaps/control/main')
    console.log("lead is deleted successfully");
    //throw new Error("failure due assetion")
    
    })

     test.only(' sample test',{
    tag: '@stest'
    }, async()=>{
     test.slow()
    console.log("timeout:",test.info().timeout);
    
    })

})