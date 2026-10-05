abstract class wrapperMethod{


    //implemented property
    browserName:string="chrome"

    //unimplemented property
    abstract browserVersion:number


    //implemented method
    alert(){
       console.log("Handle all the alerts in the page");
        
    }

    //unimplemented method
    abstract snap():void

}

//Wecannot create object for the abstract class
// new wrapperMethod()


//normal or concrete class for implementation and object creation.

class concrete extends wrapperMethod{

    browserVersion: number=160

    snap(): void {
        console.log("snap is captured");
        
    }

}

let cn=new concrete()
cn.alert()
cn.snap()
console.log(cn.browserName);
console.log(cn.browserVersion);

