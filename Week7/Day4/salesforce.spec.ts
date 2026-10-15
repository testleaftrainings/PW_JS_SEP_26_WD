import {test,expect} from "@playwright/test"

let Acc_tok:any

let tok_Type:any

let ins_Url:any

let lead_id:any

test.describe.serial('execute the test in serial mode',async()=>{

test('Salesforce API Automation-Generate token',async ({request}) => {

    //serialization-> converting object to JSON
    let responseBody=await request.post('https://login.salesforce.com/services/oauth2/token',
        
        {

        headers:{

        "Content-Type":"application/x-www-form-urlencoded"

    },
    form:{


    "grant_type":"password",
    "client_id":"3MVG9rZjd7MXFdLhTFd7jYNtTiu5DzDqdNCte5DvFnv7tbIspjQ9CGPizYGUq7h6T69VSmfqxT9yY2NS7tz84",
    "client_secret":"09FE1EF4BDD93B17821073243A441F8A780A639C21D925B575C1112A3F5E0DBE",
    "username":"gauthami.vn@testleaf.com",
    "password":"Qeagle@123"
  }

    })


   //Deserialization-> converting json to object format

   let tokenResponse =await responseBody.json()
   console.log(tokenResponse)

   
   expect(responseBody.status()).toBe(200)
   console.log(responseBody.status());


   expect(responseBody.statusText()).toBe("OK")
   console.log(responseBody.statusText())

  Acc_tok= tokenResponse.access_token
  console.log(Acc_tok);

  tok_Type=tokenResponse.token_type
  console.log(tok_Type);
  
  ins_Url=tokenResponse.instance_url
  console.log(ins_Url);

    
})


test('To create lead',async ({request}) => {


    let responseBody=await request.post(`${ins_Url}/services/data/v68.0/sobjects/lead`,{


headers:{

    "Content-Type":"application/json",
    "Authorization":`${tok_Type} ${Acc_tok}`

},
data:{

"Salutation":"Mr",
"LastName":"Alice",
"Company":"HCL"

}
})

let leadResponse=await responseBody.json()
console.log(leadResponse);

expect(responseBody.status()).toBe(201)
console.log(responseBody.status());


expect(responseBody.statusText()).toBe("Created")
console.log(responseBody.statusText())

lead_id=leadResponse.id
console.log(lead_id);

    
})

test('To fetch lead',async ({request}) => {


    let responseBody=await request.get(`${ins_Url}/services/data/v68.0/sobjects/lead/${lead_id}`,{


headers:{

    "Content-Type":"application/json",
    "Authorization":`${tok_Type} ${Acc_tok}`

}
})

let fetchResponse=await responseBody.json()
console.log(fetchResponse);

expect(responseBody.status()).toBe(200)
console.log(responseBody.status());


expect(responseBody.statusText()).toBe("OK")
console.log(responseBody.statusText())

    
})


test('To update lead',async ({request}) => {


let responseBody=await request.patch(`${ins_Url}/services/data/v68.0/sobjects/lead/${lead_id}`,{


headers:{

    "Content-Type":"application/json",
    "Authorization":`${tok_Type} ${Acc_tok}`

},
data:{

"FirstName":"bob",
"Email":"Alice@gmail.com"

}
})

//note: patch => no response body
// let patchResponse=await responseBody.json()
// console.log(patchResponse);

expect(responseBody.status()).toBe(204)
console.log(responseBody.status());


expect(responseBody.statusText()).toBe("No Content")
console.log(responseBody.statusText())

    
})

test('To delete lead',async ({request}) => {


let responseBody=await request.delete(`${ins_Url}/services/data/v68.0/sobjects/lead/${lead_id}`,{


headers:{

    "Content-Type":"application/json",
    "Authorization":`${tok_Type} ${Acc_tok}`

}
})

//delete->No response body
// let patchResponse=await responseBody.json()
// console.log(patchResponse);

expect(responseBody.status()).toBe(204)
console.log(responseBody.status());


expect(responseBody.statusText()).toBe("No Content")
console.log(responseBody.statusText())

    
})

})