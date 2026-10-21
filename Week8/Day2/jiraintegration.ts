import axios from "axios"

let endPointURI="https://testleaf-team-ppdcho09.atlassian.net/rest/api/2/issue"
let email="gauthami.vn@testleaf.com"
let apiToken="ATATT3xFfGF09dcNDx-RrcE2Y7n_mM3LkVLC4iu0n4c5qN9bzTgkJf2BN8WZYVbsGH7C3mFwE-6cCZb2YCoeZOvAXCv3RFGc1ZmTOX-cI_WRmaDu4hH8VC5Q0qtebwAmatSA69GZ40uiDb3nSpZ-1MqqOcc-JbU_-FNHvK4p9P3ddMXjTCsTufU=0BFC072D"
let pkey="PS"


export async function createBug(summary:string,description:string){


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
// console.log(response.data)

// console.log(response.status)//201
// console.log(response.statusText)//created


return response.data

}
