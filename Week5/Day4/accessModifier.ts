
export class Employeesignup{

//properties

public eName:string="Hari"
public eId:number=1234
private readonly eSalary:number=50000
protected ePhone:number=765489765
static email:string="info@testleaf.com"

//method

static employeeDetails(){
    console.log("print employee details");
    
}

public printDetails(){

    console.log(`the employee details are ${this.eName}: ${this.eId}`);
    
}

// public salaryupdate(){
//     console.log(this.eSalary)

// }

//use get for having read access

// public get readData(){
//     return this.eSalary
// }

//use set to modify or update the esalary
// public set writeData(sal:number){
// this.eSalary=sal

// }

}

//create an object 

// let emp=new Employeesignup()
// console.log(emp.eId)
// console.log(emp.eName);
// emp.printDetails()
// console.log(emp.readData)
// emp.writeData=80000
// console.log(emp.readData);
// //emp.salaryupdate()


//static properties and methods can be accessed directly using class name
console.log(Employeesignup.email);
Employeesignup.employeeDetails()



