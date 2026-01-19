
/*const fs=require('fs')
const path=require('path')

const dirPath=path.join(__dirname,'notes')
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}else{
    console.log('Folder already exist')
}

const filePath=path.join(__dirname,'notes' , 'notes.txt');
fs.writeFile(filePath,'I have done the task',(error)=>{
    if(error){
        console.log(error)
        return;
    }else{
        console.log('File written successfully')
    }


fs.readFile(filePath ,'utf-8', (error,data) =>{
    if(error){
        console.log(error)
    }else{
        console.log('File read successfully')
        console.log(data)
    }
  })
})

*/



 const name ="IVAN"
  


const { error } = require('console')
const fs=require('fs')
const path=require('path')

const dirPath=path.join(__dirname,'nodejs')
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}else{
    console.log('Folder already exists')
}


const filePath=path.join(__dirname,'nodejs','write.js');
fs.appendFile(filePath ,'Hey there',(error) =>{
    if(error){
        console.error
    }else{
        console.log('File writing successfully')
    }
})

fs.readFile(filePath,'utf-8' , (error,data) =>{
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})
