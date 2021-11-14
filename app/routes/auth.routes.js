const { verifyRegister } = require('../middleware')
const controller = require('../controller/auth.controller')
const route = require('express').Router()

module.exports = (app) => {
    app.use('/', route, function(req,res,next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept' 
        );
        next()
    })
    route.post(
        '/api/signup',
        verifyRegister.checkDuplicate,
        controller.signup    
    )

    route.post(
        '/api/signin',
        controller.signin
    )
}