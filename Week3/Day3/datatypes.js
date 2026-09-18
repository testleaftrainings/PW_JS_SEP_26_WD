"use strict";
/* Datatypes in TypeScript
-----------------------

1. number- whole,decimal
2. string-char, seq of char
3. boolean-true or false
4. undefined-empty or no value assigned
5. null- intentionally making null
6. any
7. unknown
8. never
9. tuple */
//any  => it can accept any datatype
let employee = "harish";
employee = 1234;
employee = true;
employee = undefined;
console.log(employee, typeof employee); //undefined undefined
//unknown => 
let address = 560085;
address = "Bangalore";
//address=true
//console.log(address.upperCase());  //address is of type unknown
if (typeof address == "string") {
    console.log(address.toUpperCase()); //BANGALORE
}
//never  => never going happen
// function login():void{    //void means return nothing
// return "hello"
// //console.log("hello");
// }
// console.log( login());//hello
// function log():never{
//     throw new Error('login failed')
// }
// log()
// console.log("login is successful");
//tuple  => similar to array in javascript
//javascript
let arr = [10, 20, 40];
let arr1 = ["hello", 560, true];
console.log(arr1); //[ 'hello', 560, true ]
console.log(arr1[2]); //true
arr1.push("undefined");
console.log(arr1);
