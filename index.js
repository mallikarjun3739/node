// creating basic server and api

// const http = require('http');

// http.createServer((req,res)=>{
//     res.write("<h1> this is akshay and mallikarjun</h1>");
//     res.end();
// }).listen(5000);

// const http = require('http');

// function datacontrol(req,res){

//     res.write("<h1>this is akshay and mallikarjun</h1>");
//     res.end();
// }
// http.createServer(datacontrol).listen(5000);

//making simple api

// const http = require('http');
// const data = require('./data');

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);

// input from command line, add and remove of files

// const fs = require('fs')

// const input = process.argv;

// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4])
// } 
// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid input")
// }

// file list in node js application

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'files');
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","this is mallikarjun saravandi");

// }


// file reading and displaying list in files folder

// const fs = require('fs')
// const path = require('path');
// const dirPath = path.join(__dirname,'files');

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log("file name is ",item);
//     })
// })

//using promise

// let a = 10;
// let b = 0;
// //const  = require('Promise')
// let waitingData = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })
//  waitingData.then((data)=>{
//     b=data;
//     console.log((a+b));
//  })

