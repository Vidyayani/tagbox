const router = require('express').Router()

router.get('/', (req,res) => {
    res.status(200).json('transactions')
})

module.exports = router