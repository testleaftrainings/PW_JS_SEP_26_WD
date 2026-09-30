class BrowserName{

    //properties-> data of an object

    browserType:string="chrome"
    browserVersion:number

    //methods-> for actionables
    
    launchBrowser(){
        console.log("Launch chrome browser");
        
    }

    loadUrl(){
        console.log("Loading the Url");
        console.log(this.browserType);
        
        
    }

    //default constructor=> special method that gets invoked first at the time object creation
    // constructor(){
    //     console.log("default construtor");
        
    // }

  //parameterized constructor

   constructor(a:number){
   console.log(this.browserVersion=a);

  }

}

//create the object using keyword "new"

let br=new BrowserName(160)
// console.log(br.browserType);
// console.log(br.browserVersion);
// br.launchBrowser()
// br.loadUrl()




/* typescript execution commands
ts-node filename.ts
npx ts-node filename.ts

npx tsx filename.ts*/
 
