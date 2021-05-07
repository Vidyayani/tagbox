const User = require('../models/USer')

const router = require('express').Router()

router.get('/', (req,res) => {
    User.getUser(req.headers.authorization).then(data => res.status(200).json({'balance': data.amount}))
    
})

module.exports = router