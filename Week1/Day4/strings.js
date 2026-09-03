// Strings-> sequence of characters and represneted '',"",``

//string literal-> compares the data and value

let companyName="Testleaf"//1000
let firmName="Testleaf" //1000

console.log(companyName===firmName)  //true
console.log(companyName==firmName)  //true

//string objects-> compares the reference of the string

let companyName1=new String("Testleaf") //5000
let firmName1=new String("Testleaf") //6000

console.log(companyName1===firmName1)//false
console.log(companyName1==firmName1)//false

//comparing the literal and object
console.log(companyName===companyName1)//false
console.log(companyName==companyName1)//true

//compare the data present inside the string object
console.log(companyName1.toString()===firmName1.toString()) //true


//index, length
//index starts from 0->p,1->l,2->a .....t=9
//length starts from 1->p,2->l..........10

let course="playwright"
console.log(course.length); //10

//escape sequences(\t,\n, \)

let data='it\'s \na \nregression tes\tting'
console.log(data);
/* it's 
a 
regression tes  ting */

//concat(),"+",`${}`-template literal
let v1="50"
let v2="Testcases"

console.log("there are",v1+ v2);  //there are 50Testcases
console.log(v1.concat(v2)); //50Testcases
console.log(`there are ${v1} ${v2}`);//there are 50 Testcases

//charAt -> retrieve the char at particular index

console.log(v2.charAt(4)) //c

//indexof() ->returns the index of the character

//let v2="Testcases"
console.log(v2.indexOf("a"))//5
console.log(v2.indexOf("s"))//2
console.log(v2.indexOf("s",3))//the second occurance of s is at 6th index
console.log(v2.indexOf("s",7))//the second occurance of s is at 8th index
console.log(v2.indexOf("g"))//-1 specifies, this char is not present

//slice-> extracts the portion of the string
//let course="playwright"

console.log(course.slice(0,4));//play
console.log(course.slice(4))//wright
console.log(course.slice(-6))//wright
console.log(course.slice(4,0)) // if start index is greater than the end index, it returns empty value
console.log(course.slice(-4,-1)) //igh

//substring-> extracts the portion of the string

console.log(course.substring(0,4))//play
console.log(course.substring(4,0))//play
console.log(course.substring(-3,5))//-3 is converted 0=>(0,5)=>playw
console.log(course.substring())//playwright

//split()-> it converts string into an array
 let words="Playwright Automation is interesting"
 console.log(words.split()) //[ 'Playwright Automation is interesting' ]
 console.log(words.split("")) //[ 'Playwright Automation is interesting' ]
/*  [
  'P', 'l', 'a', 'y', 'w', 'r', 'i',
  'g', 'h', 't', ' ', 'A', 'u', 't',
  'o', 'm', 'a', 't', 'i', 'o', 'n',
  ' ', 'i', 's', ' ', 'i', 'n', 't',
  'e', 'r', 'e', 's', 't', 'i', 'n',
  'g'
] */
console.log(words.split(" ")) //[ 'Playwright', 'Automation', 'is', 'interesting' ]
console.log(words.split("a")) //[ 'Pl', 'ywright Autom', 'tion is interesting' ]




