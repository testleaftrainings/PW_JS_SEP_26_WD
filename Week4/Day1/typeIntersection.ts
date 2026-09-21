

type credentails={

    username:string
    password:string
}

type browserConfig={

    browserName:string
    browserVersion:number
    headless:boolean
}

type customerconfig=credentails & browserConfig

let userconfig:customerconfig={
 

    browserVersion:160.0,
    headless:false,
    username:"raja",
    password:"Welcome@1",
    browserName:"chrome",
    
}


console.log(userconfig);

/* {
  username: 'raja',
  password: 'Welcome@1',
  browserName: 'chrome',
  browserVersion: 160,
  headless: false
} */
console.log(userconfig.browserName);//chrome



