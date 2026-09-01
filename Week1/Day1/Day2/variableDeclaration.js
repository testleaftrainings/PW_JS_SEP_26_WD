//var is keyword to declare a variable

//declaration+Assignment=Initialization
var courseName="Playwright"  //declaration
var courseName=1234//redeclartion allowed in Var keyword

console.log(courseName)
console.log(typeof courseName)


courseName=null //reassignment 
console.log(typeof courseName)


//let - redeclaration is not allowed but reassignment is possible

let salary=50000
//let salary=40000 //redeclaration is not allowed


salary="20000"
console.log(typeof salary);//string


//const-redeclaration and reassignment is not possible
const pi=3.14
//const pi=2.67 //redeclaration is not allowed

pi="pi value"
console.log(pi); //TypeError: Assignment to constant variable.










