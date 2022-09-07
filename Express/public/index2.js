// const express = require('express');

// const path = require('path');

// const app = express();

// const publicPath = path.join(__dirname, "public");
// app.get('', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`);
// });
// app.get('/about', (req, res) => {
//     res.sendFile(`${publicPath}/about.html`);
// });
// app.get('/help', (req, res) => {
//     res.sendFile(`${publicPath}/help.html`);
// });

// app.listen(5000);

const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('',(__,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});
app.get('/profile',(__,resp)=>{
    const user={
        name:'mallikarjun',
        email:'mallikarjun@gmail.com',
        city:'Bijapur'
    }
    resp.render('profile',{user}); 
});
app.listen(5000);