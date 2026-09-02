

// let x=20, y=5

//Airthmetic operators

// console.log(x+y)  //25
// console.log(x-y)  //15
// console.log(x*y)  //100
// console.log(x/y)  //20/5=4 => returns quotient
// console.log(x%y)  //20%5=0 => returns reminder

//Assignment operators

// console.log(x+=5) //x=x+5=20+5=25, the new value of x is 25
// console.log(x-=3) //x=x-3=25-3=22
// console.log(x*=2) //x=x*2=22*2=44
// console.log(x/=2) //x=x/2=44*2=22
// console.log(x%=2) //x=x%2=22%2=0
// console.log(x); //0

//comparision operators

// console.log(x>y); //new value of x is 0, 0>5 =false
// console.log(x<y); //new value of x is 0, 0<5 =true

//=== (strict equality)-> checks both the datatype and the value
// console.log(1==='1');//false
// console.log(1===1);//true

//== (loose equality)-> checks only the value
//coerction-> type conversion 

// console.log(1=='1');//true
// console.log(1==true);//true
// console.log(null==undefined)//true


//logical operators
//and (true && true), or(true || false) and not (!true)

let a=2, b=6
console.log(a>b && b>a);//(false && true)=false
console.log(a<b && b>a);//(true && true)= true

console.log(a>b || b>a);//(false || true)=true
console.log(!(a>b)) //true

//unary operators (works on single operand)

let z=5

//pre-increment
console.log(++z); //6
console.log(z); //6

//post-increment
console.log(z++); //6
console.log(z); //7


//pre-decrement
console.log(--z); //6
console.log(z); //6

//post-decrement
console.log(z--); //6
console.log(z); //5









