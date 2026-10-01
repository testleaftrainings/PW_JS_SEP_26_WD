import { Employeesignup } from "./accessModifier";

class HR extends Employeesignup{

empUpdate(){

    console.log(this.ePhone);
    
}

}

let hr=new HR()
hr.empUpdate() //765489765
