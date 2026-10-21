import axios from "axios"

let endPointURI="https://testleaf-team-ppdcho09.atlassian.net/rest/api/2/issue"
let email="gauthami.vn@testleaf.com"
let apiToken="ATATT3xFfGF09dcNDx-RrcE2Y7n_mM3LkVLC4iu0n4c5qN9bzTgkJf2BN8WZYVbsGH7C3mFwE-6cCZb2YCoeZOvAXCv3RFGc1ZmTOX-cI_WRmaDu4hH8VC5Q0qtebwAmatSA69GZ40uiDb3nSpZ-1MqqOcc-JbU_-FNHvK4p9P3ddMXjTCsTufU=0BFC072D"
let pkey="PS"
let issueID:any
let issueKey:any



async function createIssue(summary:string,description:string){

//post request
let response=await axios.post(endPointURI,
    
{

"fields":{
  "project":{
    "key":pkey
  } ,
  summary:summary,
  description:description,

  "issuetype":{
   "name":"Bug"

  }

}

},
 
{

    headers:{

    "ContentType":"application/json"

    },
    auth:{

        "username":email,
        "password":apiToken

    
    }

})

//await response.json()
console.log(response.data)

console.log(response.status)//201
console.log(response.statusText)//created

issueID=response.data.id
console.log(issueID);

issueKey=response.data.key
console.log(issueKey);




//get request

let response1=await axios.get(`${endPointURI}/${issueID}`,
    
{

    headers:{

    "ContentType":"application/json"

    },
    auth:{

        "username":email,
        "password":apiToken

    
    }

})

//await response.json()
console.log(response1.data)

console.log(response1.status)
console.log(response1.statusText)


//put request

let response2=await axios.put(`${endPointURI}/${issueID}`,
    
{

"fields":{

    "assignee": {
      "id": "712020:466d2737-a3bd-4409-b76e-87da9a6d37e4"
    },
  
  summary:summary,
  description:description,

}

},
 
{

    headers:{

    "ContentType":"application/json"

    },
    auth:{

        "username":email,
        "password":apiToken

    
    }

})

//await response.json()
console.log(response2.data)

console.log(response2.status)//204
console.log(response2.statusText)//No content


//delete request



let response3=await axios.delete(`${endPointURI}/${issueID}`,
    

 
{

    headers:{

    "ContentType":"application/json"

    },
    auth:{

        "username":email,
        "password":apiToken

    
    }

})

//await response.json()
console.log(response3.data)

console.log(response3.status)//204
console.log(response3.statusText)//No content


}

createIssue("Bug created in PW API","button is not clickable")