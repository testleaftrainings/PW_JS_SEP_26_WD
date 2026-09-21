"use strict";
function login(username, password, isloggedIn) {
    if (password) {
        if (isloggedIn) {
            console.log("already logged in");
        }
        else {
            console.log("logging in");
        }
    }
    else {
        console.log("password is missing");
    }
}
login("testleaf@email");
login("testleaf@email", "test123");
login("testleaf@email", "test123", true);
