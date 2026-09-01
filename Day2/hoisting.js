/* Hoisting is the default behaviour of JS, where the declaration part alone is getting
hoisted to the top the scope, it has 2 phases
1.memory creation phase + 2. execution phase 

At memory creation phase = All variable created using var keyword will be assigned with value as undefined
In the execution phase actual value will be assigned to the variable */


//var-> hoisting takes place and return undefined


//Actual way to print the data stored in the variable, works as expected
/* var a=10
console.log(a); //10 */


/* var - hoisting takes place, where only the variable declaration is moved to the top but not the value assignment 
and hence returns undefined */
  
                                        // internally
// console.log(a)//undefined            //var a  
// var a=10                             //console.log(a)
                                        //a=10



/* let-hoisting takes place, where only the variable declaration is moved to the top but not the value assignment
and hence throws "ReferenceError: Cannot access 'b' before initialization" */

                                                   //internally
// console.log(b)//ReferenceError                 //let b
// let b=20                                       //console.log(b) 
                                                  //b=20


/* const-hoisting takes place, where only the variable declaration is moved to the top but not the value assignment
and hence throws "ReferenceError: Cannot access 'b' before initialization" */

                                                   //internally
// console.log(c)//ReferenceError                 //const c
// let c=30                                       //console.log(c) 
                                                  //c=30


//TDZ(Temporal dead zone)- time period between variable declaration and value assigned to the variable

/* Note: const variable declaration and value assignment should happen in the same line else it will throw the
error as 'const' declarations must be initialized.


//below declaration is allowed
const c="data"

//below declaration is not allowed,throws error 'const' declarations must be initialized
const c 
c="data"   */



