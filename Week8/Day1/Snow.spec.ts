import {test,expect} from "@playwright/test"



test.describe.serial('execute in serial',async()=>{

let bearer:string

let acctoken:string

let systemId:string

test('To generate the bearer token',async ({request}) => {

//serialization-> obj to json
 let resBody=await request.post('https://dev330545.service-now.com/oauth_token.do',{


headers:{
"Content-Type" :"application/x-www-form-urlencoded"

},
form:{

"grant_type":"password",
"client_id":"f24f2e3ebc904f95abb57764f9f7d886",
"client_secret":"Ww{T^)GX+&LrYwk9b+:@Jg+!n{5#RT(L",
"username":"admin",
"password":"TkA5z3JBzp//"

}
    
})

//deserialization-> json to obj
let tokenRes=await resBody.json()
console.log(tokenRes)

expect(resBody.status()).toBe(200)
console.log(resBody.status());

expect(resBody.statusText()).toBe("OK")
console.log(resBody.statusText());

bearer=tokenRes.token_type
console.log(bearer);

acctoken=tokenRes.access_token
console.log(acctoken);

})


//post request -to create the incident

test('create incident', async ({request}) => {


let resBody=await request.post('https://dev330545.service-now.com/api/now/table/incident',{

headers:{

"Content-Type" :"application/json",
"Authorization":`${bearer} ${acctoken}`

},

data:{

  "short_description": "Email not working",
  "description": "User cannot send or receive emails",
  "comments": "Updated via POSTMAN",
  "work_notes": "Checked mail server logs",
  "subcategory": "Email",
  "impact": "2",
  "urgency": "2"

}

})
    
let createincRes=await resBody.json()
console.log(createincRes)

expect(resBody.status()).toBe(201)
console.log(resBody.status())

expect(resBody.statusText()).toBe('Created')
console.log(resBody.statusText())

systemId=createincRes.result.sys_id
console.log(systemId);

//7a407ee54744135038ac9e20116d4390



})


test('fetch incident', async ({request}) => {


let resBody=await request.get(`https://dev330545.service-now.com/api/now/table/incident/${systemId}`,{

headers:{

"Content-Type" :"application/json",
"Authorization":`${bearer} ${acctoken}`

}


})
    
let fetchincRes=await resBody.json()
console.log(fetchincRes)

expect(resBody.status()).toBe(200)
console.log(resBody.status())

expect(resBody.statusText()).toBe('OK')
console.log(resBody.statusText())

})


test('modify incident', async ({request}) => {


let resBody=await request.put(`https://dev330545.service-now.com/api/now/table/incident/${systemId}`,{

headers:{

"Content-Type" :"application/json",
"Authorization":`${bearer} ${acctoken}`

},
data:{

  "short_description": "Email is working",
  "description": "User can send or receive emails",
  "comments": "Updated via PW API",
  "work_notes": "Checked mail server",
  "subcategory": "mail",
  "impact": "1",
  "urgency": "1"

}


})
    
let modifyincRes=await resBody.json()
console.log(modifyincRes)

expect(resBody.status()).toBe(200)
console.log(resBody.status())

expect(resBody.statusText()).toBe('OK')
console.log(resBody.statusText())

})


test('update incident', async ({request}) => {


let resBody=await request.patch(`https://dev330545.service-now.com/api/now/table/incident/${systemId}`,{

headers:{

"Content-Type" :"application/json",
"Authorization":`${bearer} ${acctoken}`

},
data:{

  "short_description": "PW API Automation",
  "description": "SNOW with PW API",

}


})
    
let updateincRes=await resBody.json()
console.log(updateincRes)

expect(resBody.status()).toBe(200)
console.log(resBody.status())

expect(resBody.statusText()).toBe('OK')
console.log(resBody.statusText())

})


test('delete incident', async ({request}) => {


let resBody=await request.delete(`https://dev330545.service-now.com/api/now/table/incident/${systemId}`,{

headers:{

"Content-Type" :"application/json",
"Authorization":`${bearer} ${acctoken}`

}

})
    

expect(resBody.status()).toBe(204)
console.log(resBody.status())

expect(resBody.statusText()).toBe('No Content')
console.log(resBody.statusText())

})

})