/*let http = require("http")
let server=http.createServer(function(req,res){
    //RESTFUL api here
    if(req.url=="/"){
        res.end("Welcome to the class C application")
    }else if(req.url=="/students"){
        let students =[
            {id:1,names:"Phynx "},
            {id:2, names:"Agape"}
        ]
        res.end(JSON.stringify(students));

    }else{
        res.end("Not found!")
    }
    
})
server.listen(3000)
console.log("Application running on port 3000")

*/

//const myLog =require('./calculator')
//myLog.info("I am learning node js")
let Date = require("./edxServer")
console.log(`${Date.getDate()}`)