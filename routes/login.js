const router = require('express').Router()
const auth = require('../middleware/authentication')
const User = require('../models/User')

router.get('/', (req,res) => {
    let token = auth.generateToken()
    let user = new User(token)
    res.status(200).json(user)
})

module.exports = router