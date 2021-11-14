const jwt = require('jsonwebtoken')
const config = require('../config/auth.config')
const db = require('../models')
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({
            message: "Token not provided"
        })
    }

    jwt. verify(token, config.secre, (err, decoded)=>{
        if (err) {
            return res.status(401).send({
                message: "Unauthorized",
            })
        }
        req.userId = decoded.id
        next()
    })
}

isManajemen = (req,res,next)=> {
    User.findByPk(req.userId)
    .then((user)=> {
        user.getRoles()
        .then((roles)=> {
            for( let i = 0; i < roles.length; i++ ) {
                if(roles[i].id === user.roleId) {
                    next()
                    return
                }
            }
            res.status(404).send({
                message: "Not Found"
            })
            return
        })
    })
}