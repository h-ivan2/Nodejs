
/*

let calculator= {
    add:function(num1,num2){
        return num1-num2
    }
}

module.exports= calculator 

function subtract(num,num2){
    return num-num2
}

module.exports = subtract
*/
const { info, error } = require('console');
const fs= require('fs');
    fs.readFile("/media/NewVolume/Store/School/Courses/Web/work/work2/messages.txt" , 'utf-8' ,(error,data) =>{
        if(error){
            console.log("unable reading file " , error)
        }
        console.log(data);
    } )


    const http=require('http')
    const server=http.createServer((req,res) =>{
        res.writeHead(200,{"Content-Type" : "text/plain"})

        if(req.url =='/'){
            res.end("Hello from node js")
        }else{
            res.end("Server issue No such page")
        }
    })


 server.listen(3000, () =>{
    console.log('Server is listening on port 3000')
 })

 var log = {
     info: function (info){
        console.log('Info:' + info);
    },
     warning: function (warning){
        console.log('Warning : ' + warning);
    },

     error: function (error){
        console.log("Error: " + error)
    }
 }

    module.exports= log