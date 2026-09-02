function browser(browserVersion){  //parameter

//let browserVersion=120
switch (browserVersion) {
    case 160:
        console.log("edge browser");
        break;

    case 140:
        console.log("chrome browser");
        break
        
    case 120:
        console.log("firefox browser");
        break

    default:
        console.log("invalid browser");
        
}

}
browser(140)//argument
browser(160)