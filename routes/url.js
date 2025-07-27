const express = require('express')
const {HandleShortUrl} = require('../controllers/url')
const router = express.Router()

router.post('/',HandleShortUrl)

module.exports = router