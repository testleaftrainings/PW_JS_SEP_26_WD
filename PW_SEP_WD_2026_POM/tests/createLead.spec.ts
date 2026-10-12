
//import {test} from "@playwright/test"
//import { LoginPage } from "../Pages/login"
import {test} from "../helper/customFixture"
import { ViewLead } from "../Pages/viewLead"
import { LoginPage } from "../Pages/login"
import { WelcomePage } from "../Pages/welcome"
import { HomePage } from "../Pages/home"
import { LeadPage } from "../Pages/lead"
import { CreateLead } from "../Pages/createLead"
import  dotenv from "dotenv"
import  data from  "../Data/login.json"

dotenv.config({path:'Data/prod.env'})

//test('create lead using POM',async ({page}) => {
test('create lead using POM',async ({

loginfix,
wpfix,
hpfix,
leadfix,
clfix,
vlfix

}) => {


//object creation for login page

/* let lp=new LoginPage(page)
await lp.loadUrl("https://leaftaps.com/opentaps/control/main")
await lp.loginCredentials("democsr2","crmsfa")
await lp.clickonLogin()
//await lp.closeBrowser() */


//create object for LoginPage

//let lp=new LoginPage(page)
//await lp.loadUrl("https://leaftaps.com/opentaps/control/main")
await loginfix.loadUrl(process.env.lf_url as string)
await loginfix.loginCredentials(data[0].username,data[0].password)
await loginfix.clickonLogin()

//create object for WelocmePage
//let wp=new WelcomePage(page)
await wpfix.clickonCRMSFA()

//create object for HomePage
//let hp=new HomePage(page)
await hpfix.clickonLeadsButton()


//create object for LeadPage
//let Leadp=new LeadPage(page)
await leadfix.clickonCreateLeadButton()

//create object for CreateLeadPage
//let clp=new CreateLead(page)
//await clp.enterManditoryFields("Infosys","Naveen","Kumar")

let [cName,fName,lName]=await clfix.enterManditoryFields()

await clfix.clickonCreateLeadSubmitButton()

//create object for ViewLead
//let vp=new ViewLead(page)
//await vp.verifyLead(cName)
await vlfix.verifyLead(cName,fName,lName)
//await vp.verifyLead(lName)

  
})