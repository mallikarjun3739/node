//const { query } = require('express');
const express = require("express");
const app = express();

app.get("", (req, resp) => {
  resp.send(`<h1>Welcome to Home page</h1>
    <a href="/about">Go to About Page</a>`);
});
app.get("/about", (req, resp) => {
  resp.send(`
    <input type ="text" placeholder="User name" value="${req.query.name}"/> 
    <button>Click Me</button>
    <a href ="/">Go to Home Page</a>
    `);
});
app.get("/help", (req, resp) => {
  resp.send([
    {
      name: "rajshekar",
      email: "rajshekar@gmail.com",
    },
    {
      name: "sachin",
      email: "sachin@gmail.com",
    },
  ]);
});
app.listen(5000);
