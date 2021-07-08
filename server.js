//express connect 
const express = require('express')
const app= express();

//mongoose connection
const mongoose = require('mongoose');
// const dbURI = 'mongodb://localhost/urlshortner';
mongoose.connect('mongodb://localhost/urlshortner', {
    useNewUrlParser: true, useUnifiedTopology: true
})

//viewengine
app.set('view engine', 'ejs')

//routes
app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/shorturls', (req, res)=>{

})

//ports 
app.listen(process.env.PORT || 5000)