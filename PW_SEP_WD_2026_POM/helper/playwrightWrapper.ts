import {Page} from "@playwright/test"

export abstract class PWWrapper{



     //global  property
    
      page:Page
      
    
        constructor(tpage:Page){
    
        this.page=tpage
        
        }


        async loadApplication(url:string){

        try{
            await this.page.goto(url)
            console.log("logged in successfully")
            }
        catch(error){
        console.log("login was not successfull")
        throw new Error("login is failed")
            
        }
      }


      async clearAndFill(locator:string,data:string){

        await this.page.locator(locator).clear()
        await this.page.locator(locator).fill(data)
      }


      async click(locator:string){

        await this.page.locator(locator).click()
      }



}