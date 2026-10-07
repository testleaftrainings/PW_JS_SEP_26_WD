import { RBI } from "./interface";


abstract class BaseBank implements RBI{


//common property

AccountType: string="savings"

//abstract properties or properties specific to Bank

abstract BankBranch: string;

abstract IFSC_code: string;

abstract AccountNumber: number;


//common methods that are implemented

Deposit(){

    console.log("Amount is deposited");
    
}


OpenAccount(): void {

    console.log(" know your customer details ");
    
  
}

    

//unimplemented methods

abstract WithDrawal():void


abstract Rateofinterest(): number


}


// abstract class BaseBank1{

// }


//concrete class for abstract property and method implementation

class SBI extends BaseBank{

    BankBranch: string= "AnnaNagar"
    IFSC_code: string= "SBI00978676"
    AccountNumber: number=1200975810123456

    WithDrawal(): void {

        console.log("Amount withdrawn");
        
    }
    Rateofinterest():number {
        return 8.5
    }

    
}

let objSbi=new SBI()
console.log(objSbi.AccountNumber)
console.log(objSbi.AccountType)
console.log(objSbi.BankBranch)
console.log(objSbi.IFSC_code);
objSbi.OpenAccount()
objSbi.Deposit()
objSbi.WithDrawal()
console.log(objSbi.Rateofinterest())




