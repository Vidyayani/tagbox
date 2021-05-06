const router = require('express').Router()

router.get('/', (req,res) => {
    res.status(200).json('/spend')
})

module.exports = router