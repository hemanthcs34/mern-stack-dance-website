const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
//express related stuff
app.use(express.static('static'))//for static files
app.use(express.urlencoded())

//pug related stuff
app.set('view engine','pug')//set the template engine as pug)
app.set('views',path.join(__dirname,'views'))

//endpoints
app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('home.pug',params);
})
app.get('/contact',(req,res)=>{
    const params = {}
    res.status(200).render('contact.pug',params);
})

//server start
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})