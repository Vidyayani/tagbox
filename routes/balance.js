const User = require('../models/User')
const auth =require('../middleware/authentication')


const router = require('express').Router()

router.get('/', auth.verify, (req,res) => {
    User.getUser(req.headers.authorization).then(data => res.status(200).json({'balance': data.amount}))
    
})

module.exports = router