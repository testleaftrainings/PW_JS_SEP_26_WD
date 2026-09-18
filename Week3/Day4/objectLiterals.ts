
//object-> its a collection of related properties stored as a key value pair

/* let username="usha"
let userage=36
let usercontact=8763592390 */

//object literal and implicit way of creating the object
//ex: let person="hari"
/* 
let personalDetails={
username:"usha",
userage:36,
usercontact:8763592390
}

console.log(personalDetails.username)//usha
console.log(personalDetails)// username: 'usha', userage: 36, usercontact: 8763592390 } */

//explicit way of creating the object
//let person:string="hari"

let personalDetails:{
"($)username":string
userage:number
usercontact:number
}={
"($)username":"Ramesh",
userage:40,
usercontact:76856224476
}

console.log(personalDetails)//{ username: 'Ramesh', userage: 40, usercontact: 76856224476 }
console.log(personalDetails.usercontact,personalDetails.userage)//76856224476 40
console.log(personalDetails["($)username"])//Ramesh  -spcl characters are accessed using [] notation



