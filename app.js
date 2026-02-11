
/*
const calculator=require("./calculator")
console.log((2,5))

*/

console.log("Hello Node js!")

const fs = require("fs")
fs.readFile('/media/NewVolume/Store/School/Courses/Web/work/work2/messages.txt','utf8', (err,data) =>{
if(err){
    console.error("Error reading file: " , err);
    return;

}
console.log(data);
});

/*fs.readFile('/media/NewVolume/Store/School/Courses/Web/work/work2/messages.txt','utf8' , (error,data) =>{
    const config =JSON.parse(data);
});*/


try{
const data = fs.readFileSync('/media/NewVolume/Store/School/Courses/Web/work/work2/messages.txt' , 'utf-8');
    console.log(data);
}catch(err) {
    console.error("Error reading file: " , err)
}

fs.writeFile('/media/NewVolume/Store/School/Courses/Web/work/work2/messages.txt' , 'Hi there I am writing into files with node' , (err)=>{
    if(err){
        console.log("Couldn't write to the files" , err);
        return;
    }

    console.log('File written successfully')
});

const http = require('http');
 const server =http.createServer((req,res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if(req.url =="/"){
      res.end('Hello from  node.js server!');
    } else if(req.url =='/students'){
      
        let students =[
            {name:"Dushimire Agape" , age:15},
            {name:"HIRWA Yvan", age:15},
            {name:"phynx Yvan" , age:15}
        ]
        res.end(JSON.stringify(students))
    } else{
        res.end("Invalid url Page not found ")
    }
   
 });

 server.listen(3000, () => {
    console.log('Server running at http:localhost:3000')
 });

 