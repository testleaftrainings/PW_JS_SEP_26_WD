import { TestInfo } from "@playwright/test";
import { createBug } from "./jiraintegration"


export async function logadefect(testinfo:TestInfo){

console.log(testinfo.status);

if(testinfo.status==="failed" || testinfo.status==="timedOut"){

const summary=`Test ${testinfo.status}:${testinfo.title}`

const description=`issue is ${testinfo.error?.message??"No error message available"}`

/* testinfo.error?.message safely retrieves the error message; if error is null or undefined, it returns undefined.
?? "No error message available" provides a default message when the error message is null or undefined. */

console.log(summary);
console.log(description);

await createBug(summary,description)

}else {

    console.log("test exected successfully");
    
}

}

/* JavaScript || Operator – Key Notes
- || means OR. If either condition is true, the overall result is true.
- Always write a complete condition on both sides when comparing values.
- "timedout" is just a string, not a comparison. A non-empty string is truthy by default.
- Therefore, if (status === "failed" || "timedout") always executes the if block.
- Correct syntax: if (status === "failed" || status === "timedOut").
- Remember: Compare both sides using === to check multiple values correctly. */