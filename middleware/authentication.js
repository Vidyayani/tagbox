const jwt = require('jsonwebtoken')
const tokenSecret = "my-token-secret"
const logger = require('log4js').getLogger()

exports.verify = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) res.status(403).json({error: "Please provide a token"})
    else {
        jwt.verify(token.split(" ")[1], tokenSecret, (err) => {
            if (err) res.status(500).json({error: 'Failed to authenticate token'})
            else{
            logger.info("JWT token authenticated")
            next()
            }
        })
    }
}

exports.generateToken = (user) => {
    logger.info("Generating new JWT token")
    //to randomize using datetime as data
    return jwt.sign({}, tokenSecret, {expiresIn: '24h'})
}