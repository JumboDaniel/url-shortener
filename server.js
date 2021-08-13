//express connect 
const express = require('express')
const app= express();
const ShortUrl = require('./model/shorturls')

//mongoose connection
const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/urlshortner';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>console.log('connected')) 
.catch((err) =>console.log(err));
// mongoose.connect('mongodb://localhost/urlshortner', {
//     useNewUrlParser: true, useUnifiedTopology: true
// })

//viewengine
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'));


//routes
app.get('/', async (req, res)=>{
    const shorturls = await ShortUrl.find()
    res.render('index', {shorturl: shorturls})
})

app.post('/shorturls', async (req, res)=>{
    await ShortUrl.create({full: req.body.fullUrl })
    res.redirect('/')
})

app.get('/:shorturls', async (req, res)=>{
    const shorturls = await ShortUrl.findOne({short: req.params.shorturls})
    
    if(shorturls == null) return res.sendStatus(404)
    
    shorturls.clicks++
    shorturls.save()
    res.redirect(shorturls.full)
})

//ports 
app.listen(process.env.PORT || 5000)