//Using Express JS

const express = require('express')
const app = express();
app.get('',(req,res)=>{
    res.send('Hello,This is Home Page')
});
app.get('/about',(req,res)=>{
    res.send('Hello,This is about Page')
});
app.get('/help',(req,res)=>{
    res.send('Hello,This is help Page')
});
app.listen(5000);
