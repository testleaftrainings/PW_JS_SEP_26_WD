import {test} from "@playwright/test"

test('concurrent apporach', async ({page,context}) => {

await page.goto('https://www.leafground.com/window.xhtml')

// creating the listener and click action and resolving the promise in a single line of code using Promise.all()

let [newPage]=await Promise.all([context.waitForEvent('page'),page.locator('//span[text()="Open Multiple"]').click()])
  
//context()-> returns the browser context of a page
//pages()->returns all the pages in the context


let allPages=newPage.context().pages()

//to find the no of pages 
let pageCount=allPages.length
console.log(pageCount);  //3

//global variable declaration

let webtableRef:any
let dashboardRef:any


//to print the title of the pages

for (let index = 0; index < pageCount; index++) {

    await page.waitForLoadState('domcontentloaded')

    const Title = await allPages[index].title()
    console.log(Title);

    /* Title of pages
    
Window=0(index)
Web Table=1(index)
Dashboard=2(index) */

if(Title==="Web Table") { //comparision  
  
    webtableRef=allPages[index]  //assignment

    await webtableRef.locator('[placeholder="Search"]').fill('Russia')
    
  } else if(Title==="Dashboard"){

    dashboardRef=allPages[index]

    await dashboardRef.locator('[name="message"]').fill('Testleaf')
}

}

})