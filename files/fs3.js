// file reading and displaying list in files folder

const fs = require('fs')
const path = require('path');
const dirPath = path.join(__dirname,'files');

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is ",item);
    })
})