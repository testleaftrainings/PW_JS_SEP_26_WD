

function login(username:string, password?:string,isloggedIn?:boolean){


if(password){

    if (isloggedIn){

        console.log("already logged in");
        
}else{
    console.log("logging in");
    
}
}else{

    console.log("password is missing");
    
}

}

login("testleaf@email") //password is missing
login("testleaf@email","test123") //logging in
login("testleaf@email","test123",true) //already logged in