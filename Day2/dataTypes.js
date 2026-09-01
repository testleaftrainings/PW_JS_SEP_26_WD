/* Datatype specify the type of data the variable holds

1. Primitive Datatypes
they are Immutable-once you create variable and assign value to it, it cannot be changed.

string
number
boolean
undefined
null
bigint


2. Non-Primitive Datatypes

 collection of data-> here data is mutable/changable.
 Ex:
 var arr=[1,2,3] //index->0=1,index 1=2,index 2=3
 arr[2]=4 //[1,2,4] //index 2 data is changed from '3' to '4'

 arrays
 objects
 functions

*/



//number- in JS whole number, decimal etc all are represented as number

/* int, float, double-> in other programming languages are used to declare the number datatype
ex: int ph=8887903366 */

var phoneNumber=78635892.68
console.log(phoneNumber) //7863589268
console.log(typeof phoneNumber)//number


//string -> single char, group of char's, represented by ''(single quote),""(double quotes), ``(backticks)
var email="admin@testleaf.com"
console.log(email);//admin@testleaf.com
console.log(typeof email)//string

//boolean-> returns true or false

var isJavaScriptIsInteresting=true
console.log(isJavaScriptIsInteresting)//true
console.log(typeof isJavaScriptIsInteresting)//boolean

//null-explicitly assigning null value

var landLineNumber=null 
console.log(landLineNumber)//null
console.log(typeof landLineNumber)//object

//undefined- value will be assigned at the run time

var accountNumber
console.log(accountNumber);//undefined
console.log(typeof accountNumber);//undefined

//bigint

//number beyond this range -(2^53-1) to (2^53) =16 digits, is considered as bigInt by adding n at the end of the number
var transactionID=12345678910111233458889036883n 
console.log(transactionID); //12345678910111233458889036883n
console.log(typeof transactionID);//bigint











