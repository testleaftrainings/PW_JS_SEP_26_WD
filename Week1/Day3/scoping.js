/* Scoping -> visibilty or accessibility of the variable in the code

1. Global scope
2. Function scope-var
3. Block scope-let/const

*/

//global variable
var genderType="female"


function employee(){

if(genderType=="female"){
// Block scoped varaible
  let name="Vidya"
  const age=35 
  var occupation="QA"
  console.log("the name inside the if block",name);
  console.log("the age inside the if block",age);
  console.log("the occupation inside the if block",occupation);
  
}
//console.log("the name outside the if block",name);//ReferenceError: name is not defined
//console.log("the age outside the if block",age);//ReferenceError: age is not defined
console.log("the occupation outside the if block and inside the function block",occupation);
}
console.log("the occupation outside the if block and outside the function block",occupation); //ReferenceError: occupation is not defined

employee()

