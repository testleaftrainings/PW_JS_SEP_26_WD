//promise with .then() and catch()

/* let marks=30
let studentRecord= new Promise((resolve,reject)=>{

    if(marks>35){
        resolve('Passed')
    }else{
        reject('failed')
    }


})

//console.log(studentRecord);

studentRecord
.then(result=>console.log(result))
.catch(error=>console.log(error)) */


//promise with async and await

let marks=30

function getResult(){
return new Promise((resolve,reject)=>{

    if(marks>35){
        resolve('Passed')
    }else{
        reject('failed')
    }


})
}

async function progress() {

try{
  const result= await getResult()
  console.log(result);
  }catch(error){
    console.log(error);
    
  }
  
}

progress()