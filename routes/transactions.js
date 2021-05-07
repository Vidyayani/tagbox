const router = require('express').Router()
const transaction = require('../models/Transaction')
const auth = require('../middleware/authentication')

router.get('/', auth.verify, (req,res) => {

    transaction.getTransactionsByUser(req.headers.authorization).then( data => res.status(200).json(data))
    
})

module.exports = router