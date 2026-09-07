// Array is collection of elements of similar datatype or heterogeneous data type
//array is non primitive datatype
/* 
let name="vinoth"
let age=34
let isarray=true */

//array of elements

/* //index   0        1   2
let arr=["vinoth",34, true]

//length- no of elements present in the array
console.log(arr.length);//3( length=index+1)

//print the complete array elements
console.log(arr);//[ 'vinoth', 34, true ]

//print the specific element using index
console.log(arr[0]);//vinoth

//print the undefined index
console.log(arr[3]);// undefined

//add elements to the array
arr[3]="welcome"
console.log(arr); //[ 'vinoth', 34, true, 'welcome' ]

//change the element in the array
arr[1]=30
console.log(arr); //[ 'vinoth', 30, true, 'welcome' ]


//push()-> used add one or more elements at the end of the array
console.log(arr.push(undefined,"playwright"));//returns new length=6
console.log(arr);//[ 'vinoth', 30, true, 'welcome', undefined, 'playwright' ]

//pop()-> used to remove 1 element at the end of the array
let poppedarray=arr.pop()
console.log(poppedarray);//playwright
console.log(arr); //[ 'vinoth', 30, true, 'welcome', undefined ]


//unshift()-> add one or more elements to the beginning of the array
let unshifedarray=arr.unshift("mango", 100)
console.log(unshifedarray);//prints the new index=7

console.log(arr); //[ 'mango',100,'vinoth', 30, true, 'welcome', undefined ]

//shift()-> removes 1 element at the beginning of the array
let shifedarray=arr.shift()
console.log(shifedarray);  //mango
console.log(arr);//[ 100, 'vinoth', 30, true, 'welcome', undefined ]

//slice()-> extracts the portion of the array but it will not alter or modify the existing array
/* let slicedArray=arr.slice()
       //index=               0      1       2    3     4           5
console.log(slicedArray);//[ 100, 'vinoth', 30, true, 'welcome', undefined ] */

// let slicedArray=arr.slice(1,4)
// console.log(slicedArray) //[ 'vinoth', 30, true ]
// console.log(arr);//[ 100, 'vinoth', 30, true, 'welcome', undefined ]

//splice() -> add element, delete elements from the array.
//splice method modifies the original array
//first index=start index
//second index=delete count
// let splicedArray=arr.splice(2,3)
// console.log(splicedArray);//[ 30, true, 'welcome' ]
// console.log(arr);//[ 100, 'vinoth', undefined ]

// let splicedArray1=arr.splice(1,0,"sai", "sanjeev")
// console.log(splicedArray1);//[]
// console.log(arr);//[ 100, 'sai', 'sanjeev', 'vinoth', undefined ] 

//sort - sort() arranges array elements based on Unicode values by default (string comparison); use a comparator function for numeric sorting.
let num=[6,8,2,4,1]
console.log(num.sort()); //[ 1, 2, 4, 6, 8 ]

let mixedarray=[1,"selenium","apple",500, 200]
console.log(mixedarray.sort());  //[ 1, 200, 500, 'apple', 'selenium' ]

//sorting using the Ascii value
let num1=[5000,21,100,4]
console.log(num1.sort());  //[ 100, 21, 4, 5000 ]

//arrow function

//ascending order
console.log(num1.sort((a,b)=>a-b)); //[ 4, 21, 100, 5000 ]

//descending order
console.log(num1.sort((a,b)=>b-a));// [ 5000, 100, 21, 4 ]

//another ex: 
let madhu=[100,110,250,268]
console.log(madhu.sort()); //[ 100, 110, 250, 268 ]

//includes()-checks whether the element is present or not
console.log(madhu.includes(268));//true

//reverse() - reverse the array
console.log(madhu.reverse());//[ 268, 250, 110, 100 ]

// //join()  -> convert array into string
// console.log(madhu.join());//268,250,110,100
// console.log(madhu.join("-"));//268-250-110-100

//map => transform every element into a new array
console.log(madhu.map((num)=>num*2)); //[ 536, 500, 220, 200 ]

//filter=> to filterout specific element based on the condition

console.log(madhu.filter((num)=>num>100)); //[110,250,268]

let arr1=[1,2,3,4]
console.log(arr1.filter((num) => num >1));//[ 2, 3, 4 ]











































