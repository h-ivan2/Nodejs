/*var Person =require('./log');
var person1= new Person('James' , 'Bond');
console.log(person1.fullName());



function Person(firstName,lastName,age,gender){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.gender=gender;

    alert(`Name is ${this.firstName} and second name is ${this.lastName}`)
}

const person2=new Person('Hirwa' , 'IVAN' , 15 ,'Male')
console.log(person2.firstName)


const http=require('http')

const requestListener= function(req,res) {
    res.writeHead(200)
    if(req.url=='/'){
        res.end('Hello people')
    }else if(req.url=='/students'){
        let students=[
            {name:'HIRWA' , age:15},
            {name:'Ivan' , age:20}
        ]

        res.end(JSON.stringify(students))
    }
}

const server=http.createServer(requestListener)
const port=1

server.listen(port)
console.log("Server is running on port " +port)


/*const path=require('path');
console.log(__dirname);
console.log(__filename);

/*const filePath= path.join(__dirname,"data" , 'users.txt');
console.log(filePath)
console.log(path.resolve('data' , 'users.txt'))

const result= path.parse("/users/admin/file.js");
console.log(result)

const format=path.format({
    root:'/',
    dir:'/users/admin',
    base:'file.js',
    ext:'.js',
    name:'file'
})

console.log(format)

 let absolute=path.isAbsolute("/users/admin/file.js");
 console.log(absolute)

 const fs=require('fs');
const { error } = require('console');
 fs.readFile('/media/NewVolume/Store/School/Courses/Web/index.php' ,'utf-8',(error,data)=>{
    if(error){
        console.log('Can not readfile',(error))
    }
    console.log(data)
 })*/

    const { error } = require('console');
const fs=require('fs');
    const path=require('path')

 const filePath=path.join(__dirname,"nodejs","message.txt");

 

 fs.writeFile(filePath,'Writing into file done',(error) =>{
    if(error){
        console.error(error);
        return;
    }
    console.log('File written successfully')
 });

 if(fs.existsSync(filePath)) {
    console.log('File exists ')
 }else{
    console.log("File does not exist")
 }

 fs.access(filePath, fs.constants.F_OK,(error)=>{
if(error) {
    console.log("File does not exist");
} else{
    console.log("File exist")
}
  })

  const dirPath=path.join(__dirname,"data");
  if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
  }

  const dirPathh=path.join(__dirname, 'data1')
  const filePathh=path.join(dirPathh, 'users.txt')

  fs.mkdirSync(dirPathh,{ recursive: true});
  fs.writeFileSync(filePathh ,"Hello users");