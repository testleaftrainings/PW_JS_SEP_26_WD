//Looping statements: used for repeating the block of code
//for, while loop and Do_while


//for-> when we have known iterations, we can go with for loop

// console.log(1);
// console.log(2);
// console.log(3);

//initialization; condition; iteration
/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */

// for(let i=0;i<=10;i++){
//     console.log(i);
    
// }

//while-> when we are not sure about the iterations, we can go with while loop

/* while (condition) {
    
} */

let i=5
while(i<=10){
console.log(i)
i++
}



//do_while -> when you want to iterate through the loop or execute the code atleast once.

/* do {
    
} while (condition); */

let index=0
do{
console.log("this is an do while statement");
index++
}while(index<5)