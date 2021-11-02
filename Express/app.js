const express = require("express");
const path = require("paths");
const app = express();
const port  = 80;
app.use('/static', express.static('static'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));


app.get("/demo", (req, res)=>{
    res.status(200).render('demo',{title: "rohan", message: "hello rohan dagale"})
});

app.get("/", (req, res)=>{
    res.send("this is my first express app")
});

app.post("/about", (req, res)=>{
    res.send("this is about page of my first express app")
});

app.listen(port, ()=>{
    console.log(`the application stared successfully on port ${port}`)
});