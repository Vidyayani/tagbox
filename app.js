const express = require('express')
const app = express()
const logger = require('log4js').getLogger()

logger.level = process.argv[2]

console.log(process.argv)

app.use(express.json())
// app.use('/', require('./routes'))


app.listen(2400, () => { logger.info("server started") })

module.exports = app