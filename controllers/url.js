const shortid = require('shortid')
const URL = require('../models/url');
const {restrictToLoggedinOnly} = require('../middlewares/auth')

const { default: mongoose } = require('mongoose');

async function HandleShortUrl(req,res) {
      console.log("→ cookies:", req.cookies);
      console.log("→ req.user:", req.user);

        const body = req.body
        if(!body.url) return res.status(400).json({error: 'url is required'});

        const ShortID = shortid()
        await URL.create({
            shortID : ShortID,
            redirectURL: body.url,
            visitHistory : [],
            createdBy : req.user._id
            

        })
        return res.render('home', {
        id : ShortID
    });
}

module.exports = {
    HandleShortUrl
}