class Browse{

loadApplication(url:string,title:string):void
loadApplication(url:string):void


loadApplication(url:string,title?:string):void{

if(title){

    console.log("the title of the page is",title);
    
}else{

    console.log("the url of the page is",url);
    
}
}
}


let bro=new Browse()
bro.loadApplication("www.testleaf.com")
bro.loadApplication("www.testleaf.com","LeafTaps")