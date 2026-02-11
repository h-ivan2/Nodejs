/*const http = require('http')

const requestListener =function(req,res){
    res.writeHead(200);
    res.end('Hello , World!');
};

const port= 8000;
const server =http.createServer(requestListener);

server.listen(port);
console.log('Server is running on port ' + port)

*/


const http= require('http')

const requestListener= function(req,res){
    res.writeHead(200)
    if(req.url ==='/'){
        res.end("Hello my friend")
    }else if(req.url==='/students'){
        let students=[
            {name:'Ivan' , age:15},
            {name:'HIRWA' , age:16}
        ]
        res.end(JSON.stringify(students))
    }else{
        res.end('Page not found')
    }
}

const server=http.createServer(requestListener)
const port=8000;
server.listen(port)
console.log('Port is running on ' + port)

module.exports.getDate = function getDate(){

    let eastTime =new Date().toLocaleString("en-US" , {timeZone: "Australia/Brisbane"});
    return eastTime;
};


