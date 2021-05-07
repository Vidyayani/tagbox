const router = require('express').Router()
const transaction = require('../models/Transaction')
const user = require('../models/User')

router.post('/', (req,res) => {
    let spend = parseFloat(req.body.amount)
    let tkn = req.headers.authorization
    
    user.hasFunds(tkn,spend).then((bool) => {
    if(bool){
    let trans = new transaction(tkn,req.body.date,req.body.description,req.body.amount, req.body.currency)
    user.updateUser(tkn,spend)
    res.status(200).json(trans)
    }else{
    res.status(400).json({ "error": "Insufficient funds"})
    }
})

})

module.exports = router