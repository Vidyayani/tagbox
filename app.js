const express = require('express')
const app = express()
const logger = require('log4js').getLogger()

logger.level = process.argv[2]

app.use(express.json())
app.use('/login', require('./routes/login'))
app.use('/balance', require('./routes/balance'))
app.use('/transactions', require('./routes/transactions'))
app.use('/spend', require('./routes/spend'))


app.listen(2400, () => { logger.info("server started") })

module.exports = app