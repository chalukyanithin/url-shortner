require('dotenv').config();


const express = require('express')
const app = express()
const {connectMongo} = require('./connect')
const path = require('path')
const URL = require('./models/url')
const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRouter')
const userRoute  =require('./routes/user')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const {checkForAuthentication,restrictTo} = require('./middlewares/auth')
const PORT = process.env.PORT || 8000

mongoose.connect(process.env.MONGO_URL).then(()=>console.log('MongoDB connected'))
app.set('view engine',"ejs")
app.set('views', path.join(__dirname, 'views'));
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(checkForAuthentication)
app.use(express.static('public'))

console.log("Views folder path:", path.join(__dirname, 'views'));

app.use('/url',restrictTo(['NORMAL','ADMIN']),urlRoute)
app.use('/',staticRoute)
app.use('/user',userRoute)

app.get('/t/test',async (req,res)=>{
    const allUrls = await URL.find({})
    return res.render('home',{
        urls: allUrls
    })
}
)

app.get('/url/:shortID',async (req,res)=> {
    const shortID = req.params.shortID
    console.log(shortID)
    const entry = await URL.findOneAndUpdate({
        shortID },
        {
            $push: {
                visitHistory : {
                    timestamp : Date.now()
                }
            }
        }
    
    
    )

     if (!entry) {
        return res.status(404).send('Short URL not found');
    }
    res.redirect(entry.redirectURL)
}
)

app.listen(PORT,()=>console.log(`server started at ${PORT}`))