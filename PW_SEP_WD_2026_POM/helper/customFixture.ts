import {test as base} from "@playwright/test"
import { LoginPage } from "../Pages/login"
import { WelcomePage } from "../Pages/welcome"
import { HomePage } from "../Pages/home"
import { LeadPage } from "../Pages/lead"
import { CreateLead } from "../Pages/createLead"
import { ViewLead } from "../Pages/viewLead"



type myFixtures={
loginfix:LoginPage
wpfix:WelcomePage
hpfix:HomePage
leadfix:LeadPage
clfix:CreateLead
vlfix:ViewLead
}

export const test=base.extend<myFixtures>({

loginfix:async({page},use)=>{
  let objlp=new LoginPage(page)
  await use(objlp)

},

wpfix:async({page},use)=>{
  let objwp=new WelcomePage(page)
  await use(objwp)
},

hpfix:async({page},use)=>{
  let objhp=new HomePage(page)
  await use(objhp)
},


leadfix:async({page},use)=>{
  let objlep=new LeadPage(page)
  await use(objlep)
},

clfix:async({page},use)=>{
  let objclp=new CreateLead(page)
  await use(objclp)
},

vlfix:async({page},use)=>{
  let objvlp=new ViewLead(page)
  await use(objvlp)
}


})

