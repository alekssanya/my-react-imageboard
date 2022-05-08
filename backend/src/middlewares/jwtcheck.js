require("dotenv").config()
const jwt = require("jsonwebtoken")

const checkJWTSign = (req, res, next) => {
    try {
        const { headers: { authorization } } = req
        if (authorization) {
            const token = authorization.split(' ')[1]
            let qwe = jwt.verify(token, process.env.JWT_ACCESS)
            next()
        } else {
            return res.status(400).send("not auth")
        }
    } catch (error) {
        return res.status(401).send(error)
    }
}

module.exports = checkJWTSign