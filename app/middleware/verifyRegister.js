const db = require('../models')

const User = db.user

checkDuplicate = (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then((user) => {
        if(user){
            res.status(400).send({
                message:"Username already taken"
            })
            return
        }
        User.findOne({
            where: {
                email: req.body.email,
            }
        })
        .then(user => {
            if(user){
                res.status(400).send({
                    message:"Email already registered"
                })
                return
            }
            next()
        })
    })
}

const verifyRegister = {
    checkDuplicate: checkDuplicate
}

module.exports = verifyRegister