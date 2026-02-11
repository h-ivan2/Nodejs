const promise= new Promise((resolve,reject)=>{
    if(success){
        resolve(value);
    }else{
        reject(error);
    }
});

promise
 .then(result =>{
    console.log(result)
 })
 .catch(error =>{
    console.error(error);

 })
 .finally(() =>{
    console.log('Operation completed')
 })

 /*const promise= new Promise((resolve,reject) =>{
    if(success){
        resolve(value)
    }else{
        reject(error)
    }
 })

 promise
  .then(result =>{
    console.log(result)
  })

  .catch(error =>{

    console.log(error);
  })*/

  /*const promise1=new Promise((resolve,reject) =>{
    resolve(123);
  })

  console.log(promise1)*/