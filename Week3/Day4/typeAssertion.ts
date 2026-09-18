//type Assertion=>TS feature that tells the compiler to treat the value as specified type.  

let apiResponse:any="ok"
apiResponse=200

console.log(apiResponse);

//type assertion using <> (angular brackets)
let response=<string>apiResponse

//type assertion using "as string"
let response1=apiResponse as string

//type assertion using "!"
let response2=apiResponse!


//even after type assertion the value is still the number(no conversion, instead treats as string)
console.log(typeof response);//number
console.log(typeof response1);//number
console.log(typeof response2);//number

