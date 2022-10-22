const jwt = require('jsonwebtoken')

const sign = payload => jwt.sign(payload, '1Q2W3E4R5T')
const verify = token => jwt.verify(token, '1Q2W3E4R5T')

module.exports ={
    sign,
    verify
}