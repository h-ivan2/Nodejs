/*function add(a,b){
    return a+b;
}

module.exports = add*/


/*const subtract = require("./calculator")
let answer =require("./calculator")
console.log(subtract(5,3))*/


const { error } = require('console');
const fs =require('fs')

fs.readFile('/media/NewVolume/Store/School/Courses/Web/work/work2/messages.txt' , 'utf8' , (error,data) => {
    if(error){
        console.log("Error reading the file" , error)
        return ;
    }
     console.log(data)
    })

   /* fs.writeFile('/media/NewVolume/Store/School/Courses/Web/work/work2/messages.txt' , 'I have just repeated the second writing' , (error) =>{
        console.log('Error writing into file')
    })
        */

    let http =require('http')
    const server =http.createServer((req,res) =>{
        res.writeHead(200,{"Content-Type" : 'text/plain'});

        if(req.url==="/"){
            res.end("Hello from programming")
        }else if(req.url==='/students'){
            let students =[
                {name:"Ivan" , age:16},
                {name:"HIrwa" , age:18},
                {name:"Agape" , age:20}
            ]
            res.end(JSON.stringify(students))
        }else{
            res.end("Invalid url page not found")
        }
    })

    server.listen(4000 , () =>{
        console.log("Server is running on port 4000")
    });